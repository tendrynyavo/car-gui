import Formulaire from '../../components/formulaire/formulaire';
import './login.scss'

const Login = () => {

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
                <Formulaire inputs={inputs} />
            </div>
        </div>
    )
}

export default Login