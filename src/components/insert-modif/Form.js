import React, { useState } from 'react';
import axios from 'axios';

function Form( props ){
	
	const[ value, setValue ] = useState('');

	const handleChange = ( event ) =>{
		setValue( event.target.value );
	};

	const sendTo = ( link ) =>{
		
		const options = {
			method: 'POST',
			url: link
		};

		const data = {
			"nom" : value
		};

		alert("tena lasa ato");

		// var xhttp = new XMLHttpRequest();
		// xhttp.onreadystatechange = function(){
		// 	if( this.readyState == 4 && this.status == 200 ){
		// 		alert("sauver avec succes");
		// 	}
		// };

		// xhttp.open( options.method, options.url, true );
		// xhttp.setRequestHeader("Content-type", "application/json");
		// xhttp.send( JSON.stringify(data) );

	};

	return(
		<div>
			
				<div className="row my-3">
					<div className="title" >
						<h3 className="text-center text-decoration-underline">
							{ props.title }
						</h3>
					</div>
				</div>
				<div className="row my-3">
					<label className="form-label"> Nom </label>
					<input type="text" value={ props.value } onChange={ handleChange }  />
				</div>
				<div className="row my-3">
					<button type="button" onClick={ () => sendTo(props.link) }> 
						{ props.text_action }
					</button>
				</div>
			
		</div>

	);
}

export default Form;