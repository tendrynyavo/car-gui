import Select from "../../../components/formulaire/select";
import FormDiv from "../../../components/formulaire/form";
import { getList, ajouter } from '../../../services/crud';
import Button from "../../../components/button/button";
import List from '../../../components/formulaire/list-crud.jsx';
import { useEffect, useState, React } from 'react';
import { useParams } from 'react-router-dom';

const DesignModele = () => {
    
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [modele, setModele] = useState(null);
    const {id} = useParams();
    const[isLoading, setIsLoading] = useState(false);

    const fetchModele = () => {
        getList(`modeles/${id}`)
        .then(response => {
            let r = response.data;
            let r_1 = r.data;
            let modele = r_1.items;
            setModele(modele);
            setData(modele.categories);
        });
    };

    const fetchCategories = () => {
        getList("categories")
        .then(response => {
            setCategories(response.data);
        });
    };

    const addCategoryToModel = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let data = {};

        ajouter( data, `modeles/${id}/categories/${formData.get('categorie')}` )
        .then( () => setIsLoading(true) )
        .catch( error => alert(error));
    };

    useEffect(() => {
        console.log("Tafiditra be");
        setIsLoading(true);
        fetchModele();
        fetchCategories();
        setIsLoading(false);
    }, [isLoading]);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <FormDiv style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '20px',
                width: '40vh', 
                display: 'flex',
                justifyContent: 'center'
            }}>
                <form onSubmit = {(event) => addCategoryToModel(event)}>    
                    <h2 className='formulaire__title'>Ajouter des catégorie au modele : </h2>
                    <div style={{ marginBottom: '35px' }}>
                        <div className='input__label'>
                            <label>Categories</label>
                        </div>
                        <Select name={'categorie'}>
                            {
                                categories.map(category => {
                                    return (
                                        <option value = {category.id}>
                                            {category.nom}
                                        </option>

                                    )
                                })
                            }
                        </Select>
                    </div>
                    
                    <div className='formulaire__btn'>
                        <Button 
                            name="Valider" 
                        />
                    </div>
                </form>
            </FormDiv>
            <List title={`Liste des Categories du modele`} items={ data } />
        </div>
    );
}

export default DesignModele;