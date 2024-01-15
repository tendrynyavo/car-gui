import React, { useState, useEffect } from 'react'

import { CChart } from '@coreui/react-chartjs'

const Statistic = ( props ) => {

	const[ data, setData ] = useState([]);
	const[ labels, setLabels ] = useState([]);

	const fetchStatistics = ( endpoint ) => {
		let url = process.env.REACT_APP_API_URL + endpoint;
		let xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function() {
			if( this.readyState === 4 ){
				if( this.status === 200 ){
					let response = JSON.parse(this.responseText);
					console.log(response);
					let datas = response.data;
					let stats = datas.statistics;
					let labels = datas.mois;
					setData( stats.map( stat => stat.nombreAnnonce ) );
					setLabels( labels );
				}
			}
		};

		xhttp.open("GET" , url , true);
		xhttp.send();
	};

	useEffect( ( ) => {
		fetchStatistics( props.endpoint ); 
	}
	, [] );
	
	return(
		<CChart 
			type = "bar"
			data = {
				{
					labels:  labels,
					datasets: [
						{
							label: 'Statistique des annonces reçus par mois',
							backgroundColor: 'lightblue',
							data: data
						},

					]
				}
			}
			  labels="months"
			  options={{
			    plugins: {
			      legend: {
			        labels: {
			          color: 'blue',
			        }
			      }
			    },
			    scales: {
			      x: {
			        grid: {
			          color: 'black',
			        },
			        ticks: {
			          color: 'black',
			        },
			      },
			      y: {
			        grid: {
			          color: 'black',
			        },
			        ticks: {
			          color: 'black',
			        },
			      },
			    }
			  }
			}

		/>
	);

};

export default Statistic;