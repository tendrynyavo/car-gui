import axios from 'axios'

let headers = {
    Authorization : `Bearer ${localStorage.getItem('token')}`
};

const getStatisticsMonthly = async function(){
	let url = process.env.REACT_APP_API_URL+"/api/stats/monthly";
	return await axios.request({
        headers : headers,
        method : "GET",
        url: url
    });;
};

export { getStatisticsMonthly };