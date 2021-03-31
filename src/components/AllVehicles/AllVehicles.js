import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const AllVehicles = (props) => {
    const { image, name, id } = props.vehicleinfo;



    return (
        <div className="col-lg-3 " >
            <div className="py-3">
                <div >
                    <Link to={`/destination/${id}`}>>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                {/* <Link to={`/destination/${id}`}><Button variant="success" >Team Details</Button></Link> */}

                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default AllVehicles;