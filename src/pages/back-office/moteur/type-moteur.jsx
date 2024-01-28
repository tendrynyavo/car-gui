import FormDiv from "../../../components/formulaire/form";
import Select from "../../../components/formulaire/select";
import Button from "../../../components/button/button";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const TypeMoteur = () => {
    const[engines, setEngines] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const type = formData.get('type');

        navigate(`/moteur/${type}`);
    };
    
    return (
        <FormDiv style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '20px',
            width: '40vh', 
            display: 'flex',
            justifyContent: 'center'
        }}>
            <form onSubmit={handleSubmit}>    
                <h2 className='formulaire__title'>Création de moteur</h2>
                <div style={{ marginBottom: '35px' }}>
                    <div className='input__label'>
                        <label>Type de moteur</label>
                    </div>
                    <Select name={'type'}>
                        {
                            engines.map( engine => {
                                return(
                                    <option value={engine.id}>
                                        { engine.nom }
                                    </option>
                                )
                            } )
                        }
                    </Select>
                </div>
                <div className='formulaire__btn'>
                    <Button 
                        name="Suivant"
                    />
                </div>
                {/* <h3></h3> */}
            </form>
        </FormDiv>
    );
}

export default TypeMoteur;