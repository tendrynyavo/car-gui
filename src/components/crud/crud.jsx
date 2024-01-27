import './crud.scss';
import Form from '../formulaire/form-crud.jsx';
import { useEffect, useState, React } from 'react';
import { getList, ajouter } from '../../services/crud/index.js';
import Loading from '../../pages/loading/loading.jsx';
import DataTable from 'react-data-table-component';

const Crud = ({modele}) => {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);
    
    const inputs = [
        {
            "nom" : "nom",
            "label" : modele[0].toUpperCase() + modele.slice(1),
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
        }
    ];
    
    useEffect(() => {
        setIsLoading(true);
        getList(modele + 's')
        .then((response) => {
            setData(response.data.data);
        });
        setIsLoading(false);
    }, [modele, isLoading]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        
        const data = {
            nom : formData.get("nom")
        };

        setIsLoading(true);
        ajouter(data, modele + 's')
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
            <Form inputs={inputs} func={handleSubmit} error={error} title={`Création de ${modele}`} />
            {/* <List title={`Liste des ${modele}s`} items={data} /> */}
            <div className="list">
                <h2 className='list__label'>{`Liste des ${modele}s`}</h2>
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

export default Crud;