import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='' className='text-white'>
          <i class="fa-solid fa-utensils mx-3"></i>
          Silver Spoons
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header