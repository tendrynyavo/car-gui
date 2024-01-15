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


const Modify = ( props ) => {

  const[ value, setValue ] = useState("");
  const[ id, setId ] = useState(0);
  const toaster = useRef();
  const [toast, setToast] = useState( null );
  const handleChange = ( event ) => {
    setValue( event.target.value );
  };

  const handleUpdate = ( endpoint ) => {

    let xhttp = new XMLHttpRequest();
    let url = process.env.REACT_APP_API_URL + endpoint + "/" + id;
    let data = {
      nom : value
    };

    xhttp.onreadystatechange = function(){
      if( this.readyState === 4 ){
        if( this.status === 200 ){

          let response = JSON.parse(this.responseText);
          let message = response.message;
          let save = message.save;

          
        }
      }
    };

    xhttp.open("PUT" , url, true );
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send( JSON.stringify(data) );
  
  };

  const getItems = ( id, endpoint ) => {
    let xhttp = new XMLHttpRequest();
    let url = process.env.REACT_APP_API_URL + endpoint + "/" + id;
    console.log(url);
    xhttp.onreadystatechange = function(){
      if( this.readyState === 4 ){
        if( this.status === 200 ){
          let response = JSON.parse( this.responseText );
          let data = response.data;
          let items = data.items;
          setValue( items.nom );
        }
      }
    };

    xhttp.open("GET" , url, true);
    xhttp.send();
  };

  useEffect( () => {
    getItems(props.id, props.endpoint);
    setId( props.id );
  }, [] );

  return (
    <CForm>
      <div className="my-3 col-6" >
        <CFormLabel htmlFor="nom"> { props.title }  </CFormLabel>
        <CFormInput type="text" onChange={handleChange} value={ value } id="nom" placeholder="...." />
        <CButton type="button" onClick={ () => handleUpdate( props.endpoint ) } className="my-3"> Ajouter </CButton>
        { toast }
      </div>
    </CForm>
  );

};

export default Modify;