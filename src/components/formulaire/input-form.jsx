const Input = ({label, type, name, placeholder}) => {
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
            />
        </div>
    );
}

export default Input;