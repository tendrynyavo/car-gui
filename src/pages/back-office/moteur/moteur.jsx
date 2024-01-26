import FormDiv from "../../../components/formulaire/form";
import Input from "../../../components/formulaire/input-form";
import Button from "../../../components/button/button";
import Select from "../../../components/formulaire/select";

const Moteur = () => {

    const inputs = [
        {
            "nom" : "nom",
            "label" : "Nom du moteur",
            "type" : "text",
            "placeholder" : "Entrer le nom du moteur"
        },
        {
            "nom" : "cylindre",
            "label" : "Nombre de cylindre",
            "type" : "number",
            "placeholder" : "Entrer le nombre de cylindre"
        },
        {
            "nom" : "puissance",
            "label" : `Puissance (ch)`,
            "type" : "text",
            "placeholder" : "Entrer la puissance du moteur"
        },
        {
            "nom" : "consommation",
            "label" : "Consommation",
            "type" : "text",
            "placeholder" : "Entrer la consommation du moteur"
        },
        {
            "nom" : "capacite",
            "label" : "Capacite",
            "type" : "text",
            "placeholder" : "Entrer la capacite du moteur"
        },
    ];

    return (
        <FormDiv style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '25px',
            width: '45vh', 
            display: 'flex',
            justifyContent: 'center'
        }}>
            <form>    
                <h2 className='formulaire__title'>Création de moteur</h2>
                <div style={{ marginBottom: '35px' }}>
                    <div className='input__label'>
                        <label>Marque</label>
                    </div>
                    <Select name={'marque'}>
                        <option value="">Toyota</option>
                        <option value="">Volsvagen</option>
                        <option value="">Nissan</option>
                        <option value="">Tesla</option>
                    </Select>
                </div>
                <div style={{ marginBottom: '35px' }}>
                    <div className='input__label'>
                        <label>Carburant</label>
                    </div>
                    <Select name={'carburant'}>
                        <option value="">Essence</option>
                        <option value="">Diesel</option>
                    </Select>
                </div>
                {inputs.map(input => {
                    return (
                    <div style={{ marginBottom: '35px' }} key={input.nom}>
                        <Input 
                            name={ input.nom } 
                            label={ input.label } 
                            type={ input.type } 
                            placeholder={ input.placeholder } 
                        />
                    </div>
                    );
                })}
                <div className='formulaire__btn'>
                    <Button 
                        name="Valider" 
                    />
                </div>
            </form>
        </FormDiv>
    );
}

export default Moteur;