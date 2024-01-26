import Select from "../../../components/formulaire/select";
import FormDiv from "../../../components/formulaire/form";
import Button from "../../../components/button/button";

const Design = () => {

    return (
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

                <div style={{ marginBottom: '35px' }}>
                    <div className='input__label'>
                        <label>Categorie</label>
                    </div>
                    <Select name={'categorie'}>
                        <option value="">Facebook</option>
                        <option value="">GitHub</option>
                        <option value="">Instagram</option>
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
    );
}

export default Design;