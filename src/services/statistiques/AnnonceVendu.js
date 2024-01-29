import axios from 'axios'

let headers = {
    Authorization : `Bearer ${localStorage.getItem('token')}`
};

var getStatistiqueVente = async function(annee){
	let url = process.env.REACT_APP_API_URL+"/api/stats/vente/" + annee;
	return await axios.request({
        headers : headers,
        method : "GET",
        url: url
    });;
};

export { getStatistiqueVente };