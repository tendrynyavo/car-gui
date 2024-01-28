import Select from "../../../components/formulaire/select";
import FormDiv from "../../../components/formulaire/form";
import DataTable from 'react-data-table-component';
import Button from "../../../components/button/button";
import { useState, React, useEffect } from 'react';
import {useParams} from 'react-router-dom';

import {getList, ajouter} from '../../../services/crud';

const Transmission = () => {

    const [data, setData] = useState([]);
    const {idMoteur} = useParams();
    const [engine, setEngine] = useState(null);
    const [gearBoxes, setGearBoxes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchMotor = () => {
        getList(`moteurs/${idMoteur}`)
        .then( response => {
            let data = response.data;
            let data_1 = data.data;
            let r = data_1.data;
            setEngine(r);
            setData( r.vitesses );
        } )
        .catch(error => alert(error));
    };

    const fetchGearBox = () => {
        getList('vitesses').then(
            response => {
                let data = response.data;
                setGearBoxes(data);
            }
        )
    };

    const addGearToEngine = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let url = `moteurs/${idMoteur}/transmission/${formData.get('vitesse')}`;
        ajouter({} , url).then(
            setIsLoading(true)
        ).catch(error => alert(error));
    };

    useEffect( () => {
        setIsLoading(true);
        fetchMotor(); 
        fetchGearBox();
        setIsLoading(false);
    }, [isLoading] );

    const columns = [
        {
            name: "ID",
            selector: row => row.id
        },

        {
            name: "Nom",
            selector: row => row.nom
        }
    ];

    return (
        <div className="crud">
            <FormDiv 
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '20px',
                    width: '40vh', 
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <form onSubmit={addGearToEngine}>    
                    <h2 className='formulaire__title'>Ajout de vitesse du moteur : { engine && engine.nom } </h2>
                    <div 
                        style={{ 
                            marginBottom: '35px' 
                        }}
                    >
                        <div className='input__label'>
                            <label>Vitesse</label>
                        </div>
                        <Select name={'vitesse'}>
                            {
                                gearBoxes.map( gear => {
                                    return(
                                        <option value={gear.id}>
                                            {gear.nom}
                                        </option>    
                                    )
                                } )   
                            }

                        </Select>
                    </div>
                    
                    <div className='formulaire__btn'>
                        <Button 
                            name="Valider" 
                        />
                    </div>
                    {/* <h3></h3> */}
                </form>
            </FormDiv>
            <div className="list">
                <h2 className='list__label'>Liste des vitesses disponibles</h2>
                <DataTable
                    className='table'
                    columns={columns}
                    data={data}
                    pagination
                    fixedHeader
                >
                </DataTable>
            </div>
        </div>
    );
}

export default Transmission;