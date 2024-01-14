import React from 'react';

import Liste from '../../components/crud/Liste'

const ListeTransmission = ( props ) =>{
	let columns = [
		{
			key: 'id',
			label: 'Transmission Id',
			_props: { scope: 'col' }
		},
		{
			key: 'nom',
			label: 'Type de transmission',
			_props: { scope: 'col' }
		},
		{
			key: 'modify',
			label: '',
			_props : { scope: 'col' }
		},
		{
			key: 'delete',
			label: '',
			_props : { scope: 'col' }
		}
	];

	return (
		<Liste columns = {columns} endpoint="/api/transmission" />
	);

};

export default ListeTransmission;