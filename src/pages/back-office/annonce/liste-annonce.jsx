import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getList, ajouter, executeRequest } from '../../../services/crud'
import {useState, useEffect} from 'react';
import FormDiv from "../../../components/formulaire/form";
import Select from "../../../components/formulaire/select";
import Button from "../../../components/button/button";

const ListeAnnonce = () => {

    const navigate = useNavigate();
    const [annonces , setAnnonces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = (e, id) => {
        e.preventDefault();
        console.log(id);
        let url = "annonce/validate/" + id;
        let data = {

        };
        executeRequest("PUT" , url, data)
        .then( setIsLoading(true) ).
        catch( error => alert(error) );
    };

    const fetchNotValidateAnnouncement = () => {
        let modele = "annonce/nonValider";
        let a = getList( modele );
        a.then( response => {
            setAnnonces(response.data)
        } );
    };

    useEffect( () => {
        setIsLoading(true);
        fetchNotValidateAnnouncement();
        setIsLoading(false);
    }, [isLoading] );

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
            selector: row => row.voiture.modele.marque.nom
        },

        {
            name: "Modele",
            selector: row => row.voiture.modele.nom
        },

        {
            name: "Utilisateur",
            selector: row => row.user.nom
        },
        {
            name: "Description",
            selector: row => row.description
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
        <div className="crud">
            <div className="list-annonce">
                <h2 className='list__label'>Liste des annonces</h2>
                <DataTable
                    className='table'
                    columns={columns}
                    data={(annonces.length > 0) ? annonces : []}
                    pagination
                    fixedHeader
                >
                </DataTable>
                    {/* Information anle vaika no alatsaka eto */}
            </div>
            <FormDiv style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '20px',
            width: '40vh', 
            display: 'flex',
            justifyContent: 'center'
        }}>
                <form>    
                    <h2 className='formulaire__title'> Annonce :  </h2>
                    {/* <h3></h3> */}
                </form>
            </FormDiv>
        </div>
    );
}

export default ListeAnnonce;