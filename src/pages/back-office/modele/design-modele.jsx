import Select from "../../../components/formulaire/select";
import FormDiv from "../../../components/formulaire/form";
import { getList, ajouter } from '../../../services/crud';
import Button from "../../../components/button/button";
import List from '../../../components/formulaire/list-crud.jsx';
import { useEffect, useState, React } from 'react';

const DesignModele = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        getList('modeles')
        .then((response) => {
            setData(response.data);
        });
    }, []);

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
                <form>    
                    <h2 className='formulaire__title'>Ajouter des catégorie à un modele</h2>
                    <div style={{ marginBottom: '35px' }}>
                        <div className='input__label'>
                            <label>Modele</label>
                        </div>
                        <Select name={'modele'}>
                            <option value="">Instagram</option>
                            <option value="">GitHub</option>
                            <option value="">Facebook</option>
                            <option value="">LinkedIn</option>
                            <option value="">Twitter</option>
                            <option value="">Reddit</option>
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
            <List title={`Liste des modeles`} items={data} />
        </div>
    );
}

export default DesignModele;