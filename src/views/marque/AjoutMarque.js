import React from 'react'
import Ajout from '../../components/crud/Ajout'

// Okey misy ajout eto

const AjoutModele = () => {
  return (
    <Ajout endpoint="/api/marque" title = "Label de la Marque" />
  );
};

export default AjoutModele;