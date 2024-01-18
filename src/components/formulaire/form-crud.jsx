import Input from "./input-form";
import Button from "../button/button";
import './formulaire.scss';

const Form = ({func, inputs = [], error, title}) => {
    return (
        <div className="formulaire">
                <h2 className='formulaire__title'>{ title }</h2>
                <form onSubmit={ func }>
                    {inputs.map((input) => {
                        return (
                            <Input name={ input.nom } label={ input.label } type={ input.type } placeholder={ input.placeholder } />
                        )
                    })}
                    <div className='formulaire__btn'>
                        <Button name="Valider" />
                    </div>
                    <h3>{ error }</h3>
                </form>
        </div>
    );
}

export default Form;