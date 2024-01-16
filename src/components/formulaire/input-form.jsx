import './input.scss';

const Input = ({label, type, name, placeholder}) => {
    return (
        <div className ='formulaire__input'>
            <div className='input'>
                <div className='input__label'>
                    <label>{label}</label>
                </div>
                <input className='input__value' type={type} name={name} placeholder={placeholder} />
            </div>
        </div>
    );
}

export default Input;