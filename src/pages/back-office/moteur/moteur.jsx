import FormDiv from "../../../components/formulaire/form";
import Input from "../../../components/formulaire/input-form";
import Button from "../../../components/button/button";
import Select from "../../../components/formulaire/select";
import {useState,useEffect} from 'react';
import {getList, ajouter} from '../../../services/crud';
import DataTable from 'react-data-table-component';
import {useNavigate} from 'react-router-dom';

const Moteur = () => {

    const[ brands, setBrands ] = useState([]);
    const[ engineType, setEngineType ] = useState(null);
    const[ engines, setEngines ] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const[data, setData] = useState([]);
    const navigation = useNavigate();

    const fetchBrands = () => {
        let marques = getList("marques");
        marques.then( response => {
            setBrands( response.data );
        } )
    };

    const fetchEngineType = () =>{
        let engineTypes = getList("types");
        engineTypes.then( response => {
            setEngines( response.data );
        } )
    };

    const fetchEngines = () => {
        let engines = getList("moteurs");
        engines.then( response => {
            setData(response.data);
        } );
    };

    const handleEngineChange = (event) => {
        let engineId = event.target.value;
        let engine = engines.find( engine => engine.id === engineId );
        setEngineType(engine);
    };

    const ajoutMoteur = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);

        let data = {
            "marque" : formData.get("marque"),
            "type" :formData.get("type"),
            "carburant" :formData.get("carburant"),
            nom : formData.get('nom'),
            cylindre : formData.get('cylindre'),
            puissance : formData.get('puissance'),
            consommation : formData.get('consommation'),
            capacite : formData.get('capacite'),
            configuration : formData.get('configuration')
        };

        ajouter( data, "moteurs" ).then().catch(
            error => console.log(error)
        );
    };

    useEffect(() => {
        setIsLoading(true);
        fetchBrands();
        fetchEngineType();
        fetchEngines();
    },[isLoading]);

    const handleButtonClick = (event, id) => {
        event.preventDefault();
        navigation(`${id}/transmission`);

    };

    const inputs = [
        {
            "nom" : "nom",
            "label" : "Nom du moteur",
            "type" : "text",
            "placeholder" : "Entrer le nom du moteur"
        },
        {
            "nom" : "cylindre",
            "label" : "Nombre de cylindre",
            "type" : "number",
            "placeholder" : "Entrer le nombre de cylindre"
        },
        {
            "nom" : "puissance",
            "label" : `Puissance (ch)`,
            "type" : "text",
            "placeholder" : "Entrer la puissance du moteur"
        },
        {
            "nom" : "consommation",
            "label" : "Consommation",
            "type" : "text",
            "placeholder" : "Entrer la consommation du moteur"
        },
        {
            "nom" : "capacite",
            "label" : "Capacite",
            "type" : "text",
            "placeholder" : "Entrer la capacite du moteur"
        },
        {
            "nom" : "configuration",
            "label" : "Configuration du moteur",
            "type" : "text",
            "placeholder" : "Entrer la configuration du moteur"
        },
    ];

    const columns = [
        {
            name: "ID",
            selector: row => row.id
        },

        {
            name: "Nom",
            selector: row => row.nom
        },
        {
            name: "Marque",
            selector: row => row.marque.nom
        },
        {
            name: "Boite Vitesse",
            cell: row => <Button onClick={(e) => handleButtonClick(e, row.id)} name={'Voir'} />
        }
    ];

    return (
        <div className="crud">
            
            <FormDiv style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '25px',
                width: '45vh', 
                display: 'flex',
                justifyContent: 'center'
            }}>
                <form onSubmit={(event) => ajoutMoteur(event)}>    
                    <h2 className='formulaire__title'>Création de moteur</h2>
                    <div style={{ marginBottom: '35px' }}>
                        <div className='input__label'>
                            <label>Marque</label>
                        </div>
                        <Select name={'marque'}>
                           {
                            brands && brands.map( brand => {
                                return (
                                    <option value={brand.id}>
                                        { brand.nom }
                                    </option>
                                )
                            } )
                           }
                        </Select>
                    </div>
                    <div style={{ marginBottom: '35px' }}>
                        <div className='input__label'>
                            <label>Type de Moteur</label>
                        </div>
                        <Select name={'type'} onChange={(event) => handleEngineChange(event)}>
                            {
                                engines && engines.map( (engine, index) => {
                                    return (
                                        <option value={engine.id} key={index}>
                                            { engine.nom }
                                        </option>
                                    )
                                })
                            }
                        </Select>
                    </div>
                    <div style={{ marginBottom: '35px' }}>
                        <div className='input__label'>
                            <label>Carburant</label>
                        </div>
                        <Select name={'carburant'}>
                            {
                                engineType && engineType.carburants.map( carburant => {
                                    return (
                                        <option value = {carburant.id}>
                                            { carburant.nom }
                                        </option>

                                        )
                                } )
                            }
                        </Select>
                    </div>
                    {inputs.map(input => {
                        return (
                        <div style={{ marginBottom: '35px' }} key={input.nom}>
                            <Input 
                                name={ input.nom } 
                                label={ input.label } 
                                type={ input.type } 
                                placeholder={ input.placeholder } 
                            />
                        </div>
                        );
                    })}
                    <div className='formulaire__btn'>
                        <Button 
                            name="Valider" 
                        />
                    </div>
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

export default Moteur;