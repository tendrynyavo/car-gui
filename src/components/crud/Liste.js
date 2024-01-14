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

const Liste = (props) => {
  
  const[ items, setItems ] = useState([]);
  const[ columns, setColumns ] = useState([]);

  const fetchItems = ( endpoint ) => {
    let url = process.env.REACT_APP_API_URL + endpoint;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if( this.readyState === 4 ){
        if( this.status === 200 ){
          let response = JSON.parse(this.responseText);
          // setItems(response);
          console.log(items);
          formatDatas( response, endpoint );
        }
      }
    };
    // console.log(url);
    xhttp.open( "GET" , url, true );
    xhttp.send(null);
  };

  const formatDatas = ( response, endpoint ) => {
   response.map( item => formatData(item, endpoint) );
  setItems(response);
  };

  const formatData = ( item, endpoint ) => {
    item['modify'] = (
      <Link to={ `modifier/${item.id}` } > Modifier </Link>
    );
    item['delete'] = (
      <CButton type="button" onClick={ () => deleteProducts( item.id, endpoint ) }> Supprimer </CButton>
    );
    // console.log(item);
    return item;
  };

  const deleteProducts = ( id, endpoint ) => {
    let url = process.env.REACT_APP_API_URL + endpoint + "/" + id;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if( this.readyState === 4 ){
        if( this.status === 200 ){
            fetchItems( endpoint );
          }
      }
    };
    xhttp.open( "DELETE" , url , true );
    xhttp.send(null);
  };

  useEffect( () => {
    fetchItems( props.endpoint );
    console.log('vita ve');
    // console.log(items);
  }, [] );
  
  return(
    <CTable columns={props.columns} items = {items} />
  );

};

export default Liste;