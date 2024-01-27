import Select from "../../../components/formulaire/select";
import FormDiv from "../../../components/formulaire/form";
import DataTable from 'react-data-table-component';
import Button from "../../../components/button/button";
import { useEffect, useState, React } from 'react';
import {getList, ajouter} from '../../../services/crud';
import { useParams } from 'react-router-dom';

const Energie = () => {

    let { id } = useParams(); 
    const [data, setData] = useState([]);
    const [carburants, setCarburants] = useState([]);
    const [motor, setMotor] = useState(null);
    const [load, setLoad] = useState(false);

    const recupCarburant = () => {
        {/* console.log( id ); */}
        let carbus = getList("carburants");
        carbus.then( (response) => setCarburants(response.data) );
    };

    const recupCarburantOfType = () => {
        let m = getList(`types/${id}`);
        m.then( (response) => {
            let response_data = response.data;
            let response_data_1 = response_data.data;
            let type = response_data_1.data;
            setMotor(type);
            setData(type.carburants);
        } ); 
    };

    const addCarburantToMotor = ( event ) => {
        event.preventDefault();
        let formData = new FormData( event.target );
        let data = {
            "id" : formData.get('carburant')
        };
        let modele = `types/${id}/carburants`;
        setLoad(true);
        ajouter( data, modele ).then().catch(error => console.log(error));
        {/* setLoad(false); */}
    };

    useEffect( () => {
        console.log("eto");
        setLoad(true);
        recupCarburant();
        recupCarburantOfType();
        setLoad(false);
    }, [load]);


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
            <FormDiv style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '20px',
            width: '40vh', 
            display: 'flex',
            justifyContent: 'center'
        }}>
            <form onSubmit = { (event) => addCarburantToMotor(event) }>    
                <h2 className='formulaire__title'>Ajout de carburant du type de moteur : { motor && motor.nom } </h2>
                <div style={{ marginBottom: '35px' }}>
                    <div className='input__label'>
                        <label>Carburant</label>
                    </div>
                    <Select name={'carburant'}>
                        {
                            carburants.map( (carburant) => {
                                return (
                                    <option value={carburant.id}>
                                        { carburant.nom }
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
                <h2 className='list__label'>Liste des carburants disponibles</h2>
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

export default Energie;