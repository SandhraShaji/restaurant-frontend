import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';
function RestReview({rev}) {
    console.log(rev);
    const [open, setOpen] = useState(false);
  return (
    <div>
        <Button style={{textTransform:'capitalize',color:'white'}} variant="black"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <ListGroup>
            {
                rev?.map(item=>(    
                <ListGroup.Item style={{marginTop:'10px'}}>
                        <h5>{item.name}</h5>
                        <h6>{item.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating: {item.rating}</h6>
                        <p>{item.comments}</p>
                </ListGroup.Item>
                ))
            }
    </ListGroup>
        </div>
      </Collapse>
    </div>
  )
}

export default RestReview