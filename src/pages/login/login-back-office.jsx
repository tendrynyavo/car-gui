import Formulaire from '../../components/formulaire/formulaire';
import './login.scss';
import { useState, React } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import usersAPI from "../../services/login/usersService";

const Login = ({ setToken }) => {
    
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const inputs = [
        {
            "nom": "email",
            "label": "Email",
            "type": "email",
            "placeholder": 'Entrer votre email',
            "value": '',
        },

        {
            "nom": "password",
            "label": "Mot de passe",
            "type": "password",
            "placeholder": 'Entrer votre mot de passe',
            "value": 'janne!!!'
        },
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        
        const data = {
            'mail' : formData.get("email"),
            'password' : formData.get("password"),
        };

        try {
            var response = await usersAPI('POST', 'authentificationAdmin', data);
            setToken(response.data.token);
        } catch (error) {
            console.log(error.response.data.errors.exception);
            setError(error.response.data.errors.exception);
        }
    };

    return (
        <div className="boite">
            <div className='boite__img'>
                <img 
                    src="/car.png" 
                    alt="car" 
                    width='500'
                    style={{
                        marginTop: '20px'
                    }}
                />
            </div>
            <div className='boite__formulaire'>
                <div className='boite__formulaire__logo'>
                    <img 
                        src="/strategic.jpg" 
                        alt="car" 
                        width='100'
                        style={{
                            marginTop: '20px'
                        }}
                    />
                </div>
                <div className='boite__formulaire__title'>
                    <h2>Welcome Back</h2>
                    <p>Please enter your details</p>
                </div>
                <Formulaire func={handleSubmit} inputs={inputs} error={error} />
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login