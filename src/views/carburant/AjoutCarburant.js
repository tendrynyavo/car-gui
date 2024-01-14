import React from 'react'
import Ajout from '../../components/crud/Ajout'

// Okey misy ajout eto

const AjoutCarburant = () => {
  return (
    <Ajout endpoint="/api/carburant" title = "Nom du carburant" />
  );
};

export default AjoutCarburant;