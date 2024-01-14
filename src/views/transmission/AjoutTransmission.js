import React from 'react'
import Ajout from '../../components/crud/Ajout'

// Okey misy ajout eto

const AjoutTransmission = () => {
  return (
    <Ajout endpoint="/api/transmission" title = "Type de transmission" />
  );
};

export default AjoutTransmission;