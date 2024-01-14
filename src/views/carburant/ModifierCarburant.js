import React from 'react'
import {useParams} from 'react-router-dom'
import Modify from '../../components/crud/Modify'

const ModifierCarburant = ( props ) => {
	let { id } = useParams();
	// console.log( useParams() );
	return (
		<Modify title="Modifier Carburant" id = { id } endpoint="/api/carburant" />
	);
};

export default ModifierCarburant;