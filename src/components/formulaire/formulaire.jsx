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
            <h3 className="error">{ error }</h3>
            <div className='formulaire__btn'>
                <Button 
                    name="Valider" 
                />
            </div>
        </form>
    );
}

export default Formulaire;