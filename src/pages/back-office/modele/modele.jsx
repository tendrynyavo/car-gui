import { useEffect, useState, React } from 'react';
import { getList, ajouter } from '../../../services/crud';
import FormDiv from '../../../components/formulaire/form.jsx';
import Input from "../../../components/formulaire/input-form";
import Button from "../../../components/button/button";
import DataTable from 'react-data-table-component';
import Select from '../../../components/formulaire/select.jsx';
import { useNavigate } from "react-router-dom";

// import Button from '../../../components/button/button.jsx';

const Modele = () => {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);
    const [ marque, setMarque ] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData( document.querySelector('form') );
        let data = {
            "nom" : formData.get("nom"),
            "annee" : formData.get("annee"),
            "marque" : formData.get("marque")
            
        };

        setIsLoading(true);
        ajouter( data, 'modeles' ).then(() => {
            
        })
        .catch(error => {
            if (error.response) {
                setError(error.response.data.error);
            }
        });

    };

    useEffect(() => {
        setIsLoading(true);
        getList('modeles')
        .then((response) => {
            let response_data = response.data;
            let response_inner_data = response_data.data;
            let modeles = response_inner_data.modeles;
            let m = response_inner_data.marques;
            setData(modeles);
            setMarque(m);
        });
        setIsLoading(false);
    }, [ isLoading ]);


    const inputs = [
        {
            "nom" : "nom",
            "label" : "Nom du modele",
            "type" : "text",
            "placeholder" : "Entrer le nom du moteur"
        },
        {
            "nom" : "annee",
            "label" : "Annee de construction",
            "type" : "date",
            "placeholder" : "Entrer la date"
        },
    ];

    const handleButtonClick = (event, id) => {
        event.preventDefault();
        navigate(`/design-modele/${id}`);
    };

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
            name: "Annee",
            selector: row => row.annee
        },
        {
            name: "",
            cell: (row) => <Button onClick={(e) => handleButtonClick(e, row.id)} name={'Ajouter'} />
        }
    ];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <FormDiv>
                <h2 className='formulaire__title'>Création de modele</h2>
                <form onSubmit = { (event) => handleSubmit(event) }>
                    {inputs.map((input) => {
                        return (
                            <div 
                                style={{
                                    marginBottom: '35px'
                                }}
                                key={input.label}
                            >
                                <Input 
                                    name={ input.nom } 
                                    label={ input.label } 
                                    type={ input.type } 
                                    placeholder={ input.placeholder } 
                                />
                            </div>
                        )
                    })}
                    <div style={{ marginBottom: '35px' }}>
                        <div className='input__label'>
                            <label>Marque</label>
                        </div>
                        <Select name={'marque'}>
                            {
                                marque.map( (marque) => {
                                    return(
                                        <option value={ marque.id }> { marque.nom } </option>
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
                    <h3>{ error }</h3>
                </form>
            </FormDiv>
            <div className="list">
                <h2 className='list__label'>Liste des modeles</h2>
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

export default Modele;