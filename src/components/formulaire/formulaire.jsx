import Input from "./input-form";
import Button from "../button/button";
import './formulaire.scss';

const Formulaire = ({func, inputs = [], error}) => {
    return (
        <form onSubmit={ func }>
            {inputs.map((input) => {
                return (
                    <div 
                        style={{
                            marginBottom: '35px'
                        }}
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
            <div className='formulaire__btn'>
                <Button 
                    name="Valider" 
                />
            </div>
            <h3>{ error }</h3>
        </form>
    );
}

export default Formulaire;