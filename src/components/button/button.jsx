import './button.scss';

const Button = ({name, onClick}) => {
    return (
        <button onClick={onClick} class="btn">{name}</button>
    );
}

export default Button;