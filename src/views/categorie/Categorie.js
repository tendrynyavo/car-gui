import { React, useEffect, useState } from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
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

import { Link } from 'react-router-dom'

const Categorie = (props) => {
  
  const[ categories, setCategories ] = useState([]);

  const fetchCategories = () => {
    let url = process.env.REACT_APP_API_URL+"/api/categorie";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if( this.readyState === 4 ){
        if( this.status === 200 ){
          let response = JSON.parse(this.responseText);
          setCategories(response);
        }
      }
    };
    // console.log(url);
    xhttp.open( "GET" , url, true );
    xhttp.send(null);
  };

  const deleteProducts = ( id, endpoint ) => {
    let url = process.env.REACT_APP_API_URL + endpoint + "/" + id;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if( this.readyState === 4 ){
        if( this.status === 200 ){
            fetchCategories();
          }
      }
    };
    xhttp.open( "DELETE" , url , true );
    xhttp.send(null);
  };

  useEffect( () => {
    fetchCategories();
  }, [] );

  let columns = ["Nom" , "Disponible"];

  return(
      <CTable>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell scope="col">  </CTableHeaderCell>
            <CTableHeaderCell scope="col"> Nom </CTableHeaderCell>
            <CTableHeaderCell scope="col"> Etat </CTableHeaderCell>
            <CTableHeaderCell scope="col">  </CTableHeaderCell>
            <CTableHeaderCell scope="col">  </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
            {
              categories.map( (categorie, index) => 
                <CTableRow key={index}>
                  <CTableHeaderCell scope="row"> 
                      { index + 1 }
                  </CTableHeaderCell>
                  <CTableDataCell>
                      {
                        categorie.nom
                      }
                  </CTableDataCell>
                  <CTableDataCell>
                  {
                    (!categorie.deleted) ? "disponible" : "suprimer"
                  }
                  </CTableDataCell>
                  <CTableDataCell>
                      <Link to={ `modifier/${categorie.id}` } > Modifier </Link>
                  </CTableDataCell>
                  <CTableDataCell>
                      <CButton type="button" onClick={ () => deleteProducts( categorie.id, "/api/categorie" ) }> Supprimer </CButton>
                  </CTableDataCell>
                </CTableRow>
 )
            }
        </CTableBody>
      </CTable>
  );

};

export default Categorie;