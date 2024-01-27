import Select from "../../../components/formulaire/select";
import FormDiv from "../../../components/formulaire/form";
import DataTable from 'react-data-table-component';
import Button from "../../../components/button/button";
import { useState, React } from 'react';

const Specificite = () => {
    const [data, setData] = useState([]);

    const columns = [
        {
            name: "ID",
            selector: row => row.id
        },

        {
            name: "Nom",
            selector: row => row.nom
        }
    ];

    return (
        <div className="crud">
            <FormDiv 
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '20px',
                    width: '40vh', 
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <form>    
                    <h2 className='formulaire__title'>Ajout de moteur de ce modele</h2>
                    <div 
                        style={{ 
                            marginBottom: '35px' 
                        }}
                    >
                        <div className='input__label'>
                            <label>Moteur</label>
                        </div>
                        <Select name={'moteur'}>
                            <option value="">Open this select menu</option>
                            <option value="">GitHub</option>
                            <option value="">Instagram</option>
                            <option value="">Facebook</option>
                            <option value="">LinkedIn</option>
                            <option value="">Twitter</option>
                            <option value="">Reddit</option>
                        </Select>
                    </div>
                    
                    <div className='formulaire__btn'>
                        <Button 
                            name="Valider" 
                        />
                    </div>
                    {/* <h3></h3> */}
                </form>
            </FormDiv>
            <div className="list">
                <h2 className='list__label'>Liste des vitesses disponibles</h2>
                <DataTable
                    className='table'
                    columns={columns}
                    data={data}
                    pagination
                    fixedHeader
                >
                </DataTable>
            </div>
        </div>
    );
}

export default Specificite;