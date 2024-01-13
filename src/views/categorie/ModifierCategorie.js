import React from 'react'
import {useParams} from 'react-router-dom'
import Modify from '../../components/crud/Modify'

const ModifierCategorie = ( props ) => {
	let { id } = useParams();
	// console.log( useParams() );
	return (
		<Modify title="Modifier categorie" id = { id } endpoint="/api/categorie" />
	);
};

export default ModifierCategorie;