import React from 'react';

import Liste from '../../components/crud/Liste'

const ListeCategorie = ( props ) => {

	let columns = [
		{
			key: 'id',
			label: 'Categorie Id',
			_props: { scope: 'col' }
		},

		{
			key: 'nom',
			label: 'Nom Categorie',
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
		<Liste columns = {columns} endpoint="/api/categorie" />
	);

};

export default ListeCategorie;