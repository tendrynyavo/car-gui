import React from 'react';

import Liste from '../../components/crud/Liste'

const ListeCategorie = ( props ) =>{
	let columns = [
		{
			key: 'id',
			label: 'Carburant Id',
			_props: { scope: 'col' }
		},
		{
			key: 'nom',
			label: 'Nom Carburant',
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
		<Liste columns = {columns} endpoint="/api/carburant" />
	);

};

export default ListeCategorie;