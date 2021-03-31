import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Map from '../Map/Map';
import vehicle from './../../fakeData/MOCK_DATA.json';
import './Destination.css';


const Vehicles = () => {
    const { id } = useParams();
    const [transport, setTransportInfo] = useState({});
    useEffect(() => {
        const info = vehicle.filter((type) => id == type.id);
        setTransportInfo(info[0]);
        console.log(info[0]);
    }, [id]);
    const [click, setClick] = useState(false);
    const searchHandler = (event) => {
        console.log('clicked');
        setClick(!click);
        event.preventDefault();
    };
    const [location, setLocation] = useState({
        from: '',
        to: '',
        date: '',
    });
    const handleBlur = (event) => {
        console.log(event.target.name, event.target.value);
        if (event.target.name === 'from') {
            location.from = event.target.value;
        }
        if (event.target.name === 'to') {
            location.to = event.target.value;
        }
        if (event.target.name === 'date') {
            location.date = event.target.value;
        }
    };
    const { image, name, icon, price } = transport;
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        {!click ? (<div>
                            <Form >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Pick Form</Form.Label>
                                    <Form.Control onBlur={handleBlur} name="from" type="text" placeholder="From" />

                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Pick To</Form.Label>
                                    <Form.Control onBlur={handleBlur} name="to" type="text" placeholder="To" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Traveling Date</Form.Label>
                                    <Form.Control onBlur={handleBlur} name="date" type="text" placeholder="Date" />
                                </Form.Group>


                                <Button onClick={searchHandler} variant="primary" type="submit">
                                    Search
  </Button>
                            </Form>
                        </div>) : (
                            <div className="destination">
                                <div className="location">
                                    <h2>From:{location.from}</h2>
                                    <h2>To:{location.to}</h2>
                                    <h4>Date:{location.date}</h4>
                                </div>
                                <div className="icon-parent">
                                    <div className="d-flex icon-box">
                                        <img className="icon" src={icon} alt="" />
                                        <h2 className="icon-text">{name}</h2>
                                        <h3 className="icon-text">{price}</h3>
                                    </div>
                                    <div className="d-flex icon-box">
                                        <img className="icon" src={icon} alt="" />
                                        <h2 className="icon-text">{name}</h2>
                                        <h3 className="icon-text">{price}</h3>
                                    </div>
                                    <div className="d-flex icon-box">
                                        <img className="icon" src={icon} alt="" />
                                        <h2 className="icon-text">{name}</h2>
                                        <h3 className="icon-text">{price}</h3>
                                    </div>
                                </div>
                            </div>
                        )}


                    </Col>
                    <Col xs={12} md={6}>
                        {/* <img src="https://i.picsum.photos/id/151/536/354.jpg?hmac=cwjMPOWMhlCM0tids3h8POzNYjiUHzTbecZ9yyEfn4w" alt="" /> */}
                        <Map></Map>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Vehicles;

