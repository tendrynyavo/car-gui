import FormDiv from "../../../components/formulaire/form";
import Input from "../../../components/formulaire/input-form";
import Button from "../../../components/button/button";
import Select from "../../../components/formulaire/select";
import {useState,useEffect} from 'react';
import {getList, ajouter} from '../../../services/crud';

const Moteur = () => {

    const[ brands, setBrands ] = useState([]);
    const[ engineType, setEngineType ] = useState(null);
    const[ engines, setEngines ] = useState([]);
    const[isLoading, setIsLoading] = useState(false);

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
    },[isLoading]);

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

    return (
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
    );
}

export default Moteur;