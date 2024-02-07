import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestCard from './RestCard';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
function AllRest() {
  const base_url='https://restaurant-backend1.onrender.com/restaurants'
  const [AllRestData, setAllRestData]=useState([])
  const fetchData = async()=>{
    const result = await axios.get(base_url)
    console.log(result.data);
    setAllRestData(result.data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div style={{width:'100%'}}>
      <div className='cardiv mt-3 mb-5' style={{width:'95%',marginInline:'2.5%'}}>
      <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img style={{borderRadius:'10px'}} height={'300px'} src='https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img style={{borderRadius:'10px'}} height={'300px'} src='https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img style={{borderRadius:'10px'}} height={'300px'} src='https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img style={{borderRadius:'10px'}} height={'300px'} src='https://images.pexels.com/photos/670705/pexels-photo-670705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5}>
        <img style={{borderRadius:'10px'}} height={'300px'} src='https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={6}>
        <img style={{borderRadius:'10px'}} height={'300px'} src='https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
      </div>
      <h4 className='text-center my-5'>Our Restaurants</h4>
      <Row className='d-flex' style={{width:'98%',marginInline:'1%'}}>
        {
          AllRestData.map(item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
              <RestCard restaurant={item}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default AllRest