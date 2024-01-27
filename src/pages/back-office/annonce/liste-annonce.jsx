import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";
import Button from '../../../components/button/button';
import { Link } from "react-router-dom";

const ListeAnnonce = () => {

    const navigate = useNavigate();

    const handleButtonClick = (e, id) => {
        e.preventDefault();
        console.log(id);
        navigate(`/moteur/type/${id}`);
    }

    const columns = [
        {
            name: "ID",
            selector: row => row.id
        },
        
        {
            name: "Date",
            selector: row => row.date
        },

        {
            name: "Marque",
            selector: row => row.voiture.marque.nom
        },

        {
            name: "Modele",
            selector: row => row.voiture.modele
        },

        {
            name: "Utilisateur",
            selector: row => row.user.nom
        },

        {
            name: "Valider",
            cell: (row) => <Link onClick={(e) => handleButtonClick(e, row.id)}><i className='bi bi-check'></i></Link>,
        }
    ];

    const data = [
        {
            "id" : "AN001",
            "date" : "2023-04-02",
            "voiture" : {
                "id" : "VOI001",
                "modele" : "Model S",
                "marque" : {
                    "id": "MAQ001",
                    "nom": "Tesla"
                }
            },
            "user": {
                'id' : "CLI001",
                "nom": "Tendry"
            }
        },{
            "id" : "AN001",
            "date" : "2023-04-02",
            "voiture" : {
                "id" : "VOI001",
                "modele" : "Model S",
                "marque" : {
                    "id": "MAQ001",
                    "nom": "Tesla"
                }
            },
            "user": {
                'id' : "CLI001",
                "nom": "Tendry"
            }
        },{
            "id" : "AN001",
            "date" : "2023-04-02",
            "voiture" : {
                "id" : "VOI001",
                "modele" : "Model S",
                "marque" : {
                    "id": "MAQ001",
                    "nom": "Tesla"
                }
            },
            "user": {
                'id' : "CLI001",
                "nom": "Tendry"
            }
        },
    ];

    return (
        <div className="list-annonce">
            <h2 className='list__label'>Liste des annonces</h2>
            <DataTable
                className='table'
                columns={columns}
                data={data}
                pagination
                fixedHeader
            >
            </DataTable>
        </div>
    );
}

export default ListeAnnonce;