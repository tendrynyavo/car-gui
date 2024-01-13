import { React, useEffect, useState, useRef } from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import ToastNotification from '../notification/ToastNotification'

// Okey manao page indray eto

const Ajout = ( props ) =>{
  const[ value, setValue ] = useState("");
  const[ toasts, setToasts ] = useState(0);
  const toaster = useRef();
  const [toast, setToast] = useState( null );
  const handleChange = ( event ) => {
    setValue( event.target.value );
  };

  const handleAjout = ( endpoint ) => {
    let xhttp = new XMLHttpRequest();
    let url = process.env.REACT_APP_API_URL + endpoint;
    let data = {
      nom : value
    };

    xhttp.onreadystatechange = function(){
      if( this.readyState === 4 ){
        if( this.status === 200 ){
          let response = JSON.parse(this.responseText);
          let message = response.message;
          let save = message.save;
          setToast( <ToastNotification ref = {toaster} push={ toasts } message = {save} /> )
        }
      }
    };

    xhttp.open("POST" , url, true );
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send( JSON.stringify(data) );
  };

  return(
    <CForm>
      <div className="my-3 col-6" >
        <CFormLabel htmlFor="nom"> { props.title }  </CFormLabel>
        <CFormInput type="text" onChange={handleChange} id="nom" placeholder="...." />
        <CButton type="button" onClick={ () => handleAjout( props.endpoint ) } className="my-3"> Ajouter </CButton>
        
      </div>
    </CForm>
  );

};

export default Ajout;