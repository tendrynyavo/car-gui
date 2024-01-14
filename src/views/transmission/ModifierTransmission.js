import React from 'react'
import {useParams} from 'react-router-dom'
import Modify from '../../components/crud/Modify'

const ModifierTransmission = ( props ) => {
	let { id } = useParams();
	return (
		<Modify title="Modifier Transmission" id = { id } endpoint="/api/transmission" />
	);
};

export default ModifierTransmission;