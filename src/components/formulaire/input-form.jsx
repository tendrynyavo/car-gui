const Input = ({label, type, name, placeholder, value, disabled}) => {
    return (
        <div className ='input'>
            <div className='input__label'>
                <label>{ label }</label>
            </div>
            <input 
                className='input__value' 
                type={ type } 
                name={ name } 
                placeholder={ placeholder }
                value = {value}
                disabled = { disabled && disabled }
            />
        </div>
    );
}

export default Input;