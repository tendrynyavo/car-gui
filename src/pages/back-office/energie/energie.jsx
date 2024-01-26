import Select from "../../../components/formulaire/select";
import FormDiv from "../../../components/formulaire/form";
import Button from "../../../components/button/button";

const Energie = () => {

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
                <h2 className='formulaire__title'>Création d'energie</h2>
                <div style={{ marginBottom: '35px' }}>
                    <div className='input__label'>
                        <label>Carburant</label>
                    </div>
                    <Select name={'carburant'}>
                        <option value="">Open this select menu</option>
                        <option value="">GitHub</option>
                        <option value="">Instagram</option>
                        <option value="">Facebook</option>
                        <option value="">LinkedIn</option>
                        <option value="">Twitter</option>
                        <option value="">Reddit</option>
                    </Select>
                </div>

                <div style={{ marginBottom: '35px' }}>
                    <div className='input__label'>
                        <label>Type de moteur</label>
                    </div>
                    <Select name={'carburant'}>
                        <option value="">Open this select menu</option>
                        <option value="">GitHub</option>
                        <option value="">Instagram</option>
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

    );
}

export default Energie;