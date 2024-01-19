import Formulaire from './formulaire';
import './formulaire.scss';

const Form = ({func, inputs = [], error, title}) => {
    return (
        <div className="formulaire">
            <h2 className='formulaire__title'>{ title }</h2>
            <Formulaire 
                func={func} 
                inputs={inputs} 
                error={error}  
            />
        </div>
    );
}

export default Form;