import Select from "../../../components/formulaire/select";
import FormDiv from "../../../components/formulaire/form";
import DataTable from 'react-data-table-component';
import Button from "../../../components/button/button";
import { useState, React, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getList, ajouter} from '../../../services/crud';


const Specificite = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();
    const [modele, setModele] = useState(null);
    const [engines, setEngines] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchMotors = () => {
        getList("moteurs").then(response => {
            setEngines(response.data);
        });
    };

    const fetchModel = () => {
        let e = getList(`modeles/${id}`);
        e.then( (response) => {
            let data = response.data;
            let data_1 = data.data;
            let r = data_1.items;
            setModele(r);
            setData(r.moteurs);
        } );
    };

    const addEngineToMotor = ( event ) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let url = `modeles/${id}/moteurs/${formData.get('moteur')}`;
        ajouter( {} , url )
        .then( setIsLoading(true) )
        .catch( error => alert(error) );
    };

    useEffect( () => {
        setIsLoading(true);
        fetchModel();
        fetchMotors();
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
                <form onSubmit={addEngineToMotor}>    
                    <h2 className='formulaire__title'>Ajout de moteur au modele : { modele && modele.nom } </h2>
                    <div 
                        style={{ 
                            marginBottom: '35px' 
                        }}
                    >
                        <div className='input__label'>
                            <label>Moteur</label>
                        </div>
                        <Select name={'moteur'}>
                            {
                                engines.map( engine => {
                                    return (
                                        <option value={engine.id}>
                                            {engine.nom}
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
                <h2 className='list__label'>Liste des Moteurs disponibles</h2>
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

export default Specificite;