import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';
function ViewRest() {
  //get id of particular restaurant
  // const pathParams = useParams() //:id
  // //Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
  // console.log(pathParams.id);
  const [restDetails,setRestDetails]= useState({})
  const {id} = useParams();
  console.log(id);
  const base_url='https://restaurant-backend1.onrender.com/restaurants'
  const fetchDetails = async()=>{
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setRestDetails(result.data)
  }
  console.log(restDetails);

  useEffect(()=>{
    fetchDetails()
  },[])
  return (
    <div style={{width:'100%'}}>
      <Row style={{width:'100%'}}>
        <Col>
          <img width={'450px'} src={restDetails.photograph} alt="" />
        </Col>
        <Col className='p-5'>
        <ListGroup className='me-5 mt-3'>
          <h3 className='mb-4'>{restDetails.name}</h3>
        <ListGroup.Item>Location: {restDetails.address}</ListGroup.Item>
        <ListGroup.Item>Cuisine: {restDetails.cuisine_type}</ListGroup.Item>
        <ListGroup.Item>Near: {restDetails.neighborhood}</ListGroup.Item>
        <ListGroup.Item><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
        <ListGroup.Item><RestReview rev={restDetails.reviews}/></ListGroup.Item>
        </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest