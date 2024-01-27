import { useEffect, useState, React } from 'react';
import { getList } from '../../../services/crud';
import FormDiv from '../../../components/formulaire/form.jsx';
import Input from "../../../components/formulaire/input-form";
import Button from "../../../components/button/button";
import DataTable from 'react-data-table-component';
import Select from '../../../components/formulaire/select.jsx';

const Modele = () => {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getList('modeles')
        .then((response) => {
            setData(response.data);
        });
        setIsLoading(false);
    }, []);

    const inputs = [
        {
            "nom" : "nom",
            "label" : "Nom du modele",
            "type" : "text",
            "placeholder" : "Entrer le nom du moteur"
        },
        {
            "nom" : "nom",
            "label" : "Nom du modele",
            "type" : "select",
            "placeholder" : "Entrer le nom du moteur"
        },
        {
            "nom" : "annee",
            "label" : "Annee de construction",
            "type" : "date",
            "placeholder" : "Entrer la date"
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
            name: "Annee",
            selector: row => row.annee
        },
    ];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <FormDiv>
                <h2 className='formulaire__title'>Création de modele</h2>
                <form>
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
                            <label>Carburant</label>
                        </div>
                        <Select name={'carburant'}>
                            <option value="">Essence</option>
                            <option value="">Diesel</option>
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
                <h2 className='list__label'>Liste des types de moteurs</h2>
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