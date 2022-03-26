import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderDish ({dish,city}){
    return(
        <div className="container">
        <Card>
          <CardImg width="50%" src={dish.image} alt={dish.name}/> 
          <CardBody>
              <CardTitle>Item name - {dish.name}</CardTitle>
              <CardText>Item price - {dish.price}</CardText>
              <CardText>Destination - {city}</CardText>

              
          </CardBody>
          
        </Card>
            <div>
            <Link to='/favorites'>
                    <button>
                        Back
                    </button>
                </Link>
        
                <Link to={`/pay/${dish._id}`} >
                    <button>
                        Proceed to Pay
                    </button>
                </Link>
            </div>
        </div>
        
    );
}




function Confirm (props) {    
    return (
        <div className="container">
        
        <div className="row">
            <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} city={props.city}/>
            
            </div>
            
        </div>
        </div>
    );
    
}

export default Confirm;