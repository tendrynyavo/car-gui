import React from 'react'
import Ajout from '../../components/crud/Ajout'

// Okey misy ajout eto

const AjoutModele = () => {
  return (
    <Ajout endpoint="/api/modele" title = "Nom du modele" />
  );
};

export default AjoutModele;