import Formulaire from '../../components/formulaire/formulaire';
import './login.scss';
import { useState, React } from 'react';
import { login } from '../../services/login';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Login = ({ setToken }) => {
    
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const inputs = [
        {
            "nom": "email",
            "label": "Email",
            "type": "email",
            "placeholder": 'Entrer votre email',
        },

        {
            "nom": "password",
            "label": "Mot de passe",
            "type": "password",
            "placeholder": 'Entrer votre mot de passe'
        },
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        
        const data = {
            'mail' : formData.get("email"),
            'password' : formData.get("password"),
        };

        login(data)
        .then((response) => {
            if (response.status === 200) {
                setToken(response.data.data.token);
            }
        })
        .catch(error => {
            if (error.response) {
                setError(error.response.data.error);
            }
        });
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