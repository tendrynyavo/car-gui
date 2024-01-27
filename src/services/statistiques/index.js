import axios from 'axios'
const getStatisticsMonthly = async function(){
	let url = process.env.REACT_APP_API_URL+"/api/stats/monthly";
	return await axios.get( url );
};

export { getStatisticsMonthly };