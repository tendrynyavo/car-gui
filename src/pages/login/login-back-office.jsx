import { React, useState } from 'react'
import Formulaire from '../../components/formulaire/formulaire';
import './login.scss'
import { useAuth } from "../../firebase/AuthContext"
import apiRequest from "../../services/service-api/usersService";

const LoginB = () => {

    const inputs = [
        {
            "nom": "email",
            "label": "Email",
            "type": "email",
            "placeholder": 'Entrer votre email'
        },

        {
            "nom": "password",
            "label": "Mot de passe",
            "type": "password",
            "placeholder": 'Entrer votre mot de passe'
        },
    ]
    const { login } = useAuth()
    const [error, setError] = useState("")

    const authentifications = async (e) => {
        e.preventDefault();
        const formulaire = e.target;
        const email = formulaire.querySelector('[name="email"]').value;
        const password = formulaire.querySelector('[name="password"]').value;
        try {
            const user = await login(email, password);
            if(user) {
                var requestData = {id: user.uid};
                var response = await apiRequest('POST', 'authentificationAdmin', requestData);
                localStorage.setItem('token', response.data.token);
                setError("Yess")
            }
        } catch (error) {
            setError(error.message)
        }
      };

    return (
        <div className="boite">
            <div className='boite__img'>
                <img 
                    src="car.png" 
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
                        src="strategic.jpg" 
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
                <Formulaire func={authentifications} inputs={inputs} error={error} />
            </div>
        </div>
    )
}

export default LoginB