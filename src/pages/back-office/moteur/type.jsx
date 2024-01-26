import Form from '../../../components/formulaire/form-crud.jsx';
import List from '../../../components/formulaire/list-crud.jsx';
import Loading from '../../loading/loading.jsx';
import { useEffect, useState, React } from 'react';
import { getList, ajouter } from '../../../services/crud';
import DataTable from 'react-data-table-component';
import Button from '../../../components/button/button.jsx';

const TypeCrud = () => {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);
    
    const inputs = [
        {
            "nom" : "nom",
            "label" : "Nom",
            "type" : "text",
            "placeholder" : "Entre le nom"
        }
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
            name: "Ajout de carburant",
            cell: () => <Button name={'Ajouter'} />,
        }
    ];
    
    useEffect(() => {
        setIsLoading(true);
        getList('types')
        .then((response) => {
            setData(response.data.data.data);
        });
        setIsLoading(false);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        
        const data = {
            nom : formData.get("nom")
        };

        ajouter(data, 'types')
        .then(() => {

        })
        .catch(error => {
            if (error.response) {
                setError(error.response.data.error);
            }
        });
    };
    
    
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="crud">
            <Form inputs={inputs} func={handleSubmit} error={error} title={`Création de type`} />
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

export default TypeCrud;