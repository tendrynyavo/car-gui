import React from 'react';

import Liste from '../../components/crud/Liste'

const ListeModele = ( props ) =>{
	let columns = [
		{
			key: 'id',
			label: 'Modele Id',
			_props: { scope: 'col' }
		},
		{
			key: 'nom',
			label: 'Nom Modele',
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
		<Liste columns = {columns} endpoint="/api/modele" />
	);

};

export default ListeModele;