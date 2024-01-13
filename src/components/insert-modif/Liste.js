import React, { useState, useEffect } from 'react';

function Liste(){

	const[ data, setData ] = useState(null);

	const fetchData = () => {
		const url = "https://car-ws-production.up.railway.app/api/categorie";
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if( xhttp.readyState == 4 ){
				if( xhttp.status == 200 ){
					let response = xhttp.responseText;
					response = JSON.parse(response);
					setData(response);
					// console.log( response[0].nom );
				}else{
					alert("There is an error");
				}
			}
		};
		xhttp.open( 'GET' , url, true );
		xhttp.send();
	};

	useEffect( () =>{
		fetchData();
	}
		, [] );

	return(
		<div>
			{
				( data ) ? data.map( d => 
					<div className = "card">
						{ d.nom }
					</div>
				 ) : <div>
						Aucun résultat à afficher
					</div>
			}
		</div>
	);
};

export default Liste;