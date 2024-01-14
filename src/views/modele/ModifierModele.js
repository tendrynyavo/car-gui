import React from 'react'
import {useParams} from 'react-router-dom'
import Modify from '../../components/crud/Modify'

const ModifierModele = ( props ) => {
	let { id } = useParams();
	return (
		<Modify title="Modifier Modele" id = { id } endpoint="/api/modele" />
	);
};

export default ModifierModele;