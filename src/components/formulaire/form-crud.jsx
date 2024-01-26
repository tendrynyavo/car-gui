import FormDiv from './form';
import Button from "../button/button";
import Input from './input-form';

const Form = ({func, inputs = [], error, title}) => {
    return (
        <FormDiv>
            <h2 className='formulaire__title'>{ title }</h2>
            <form onSubmit={ func }>
                {inputs.map((input) => {

                    
                    
                    return (
                        <div 
                            style={{
                                marginBottom: '35px'
                            }}
                            key={input.label}
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
        </FormDiv>
    );
}

export default Form;