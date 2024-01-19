import './crud.scss';
import Form from '../formulaire/form-crud.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getList, ajouter } from '../../services/crud/index.js';
import List from '../formulaire/list-crud.jsx';
import React from 'react';
import Loading from '../../pages/loading/loading.jsx';

const Crud = () => {
    
    const {modele} = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [ isLoading, setIsLoading ] = useState(true);
    console.log('[debut de composant]', isLoading);
    
    
    const inputs = [
        {
            "nom" : "nom",
            "label" : modele[0].toUpperCase() + modele.slice(1),
            "type" : "text",
            "placeholder" : "Entre le nom"
        }
    ];
    
    useEffect(() => {
        console.log(isLoading);
        setIsLoading(true);
        getList(modele)
        .then((response) => {
            setData(response.data);
        });
        setIsLoading(false);
    }, [modele]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        
        const data = {
            nom : formData.get("nom")
        };

        ajouter(data, modele)
        .then(() => {

        })
        .catch(error => {
            if (error.response) {
                setError(error.response.data.error);
            }
        });
    };
    
    console.log('[fin de composant]', isLoading);
    
    if (isLoading) 
        return <Loading />

    return (
        <div className="crud">
            <Form inputs={inputs} func={handleSubmit} error={error} title={`Création de ${modele}`} />
            <List title={`Liste des ${modele}s`} items={data} />
        </div>
    );
}

export default Crud;