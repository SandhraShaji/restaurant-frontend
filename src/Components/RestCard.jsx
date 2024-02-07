import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function RestCard({restaurant}) {
    console.log(restaurant);
  return (
    <div>
      <Link style={{textDecoration:'none'}} to={`view/${restaurant.id}`}>
      <MDBCard className='mx-2 my-4' style={{height:'520px'}}>
      <MDBCardImage src={restaurant.photograph} height={'400px'} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{restaurant.name}</MDBCardTitle>
        <MDBCardText>{restaurant.address}</MDBCardText>
      </MDBCardBody>
      </MDBCard>
      </Link>
    </div>
  )
}

export default RestCard