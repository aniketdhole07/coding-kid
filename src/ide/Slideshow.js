import React from 'react';
import {Carousel, Row } from "react-bootstrap";
import styles from './Slideshow.css'
class Slideshow extends React.Component {
    render() {
        return (
            <Row className="carousel">
                <Carousel>
                    <Carousel.Item className="shift-left">
                        <img  src={require('./a3.jpg')} width="100%" height="500"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p className="shift-right">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="shift-left">
                        <img src={require('./a1.jpg')} width="100%" height="500"/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p className="shift-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="shift-left">
                        <img src={require('./a4.jpg')} width="100%" height="500"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p className="shift-right">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h3>Side label</h3>
            </Row>
        )
    }
}

export default Slideshow;