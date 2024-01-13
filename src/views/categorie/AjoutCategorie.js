import React from 'react'
import Ajout from '../../components/crud/Ajout'

// Okey misy ajout eto

const AjoutCategorie = () => {
  return (
    <Ajout endpoint="/api/categorie" title = "Nom de la Categorie" />
  );
};

export default AjoutCategorie;