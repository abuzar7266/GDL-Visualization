import React from "react";
import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import '../assets/css/Home.css';
import GraphTrans from '../assets/img/GraphTrans.png';
const LandingPage = ()=>{
    return (<>
    <Container style={{textAlign:'right'}}>
        <div  style={{zIndex:'2',position:'absolute'}}>
        <Row>
            <br /><br /><br /><br />
        </Row>
        <Row>
            <Col
             sm={2}
            >
            
            </Col>
            <Col lg={7}
                md={10}
                xl={7}
                sm={12}>
                <span className="title">FYP Name</span><br />
                <span className="subtitle">Algorithmic Visualisation of Geometric Deep Learning</span>
            </Col>
        </Row>
        <Row>
            <br />
        </Row>
        <Row>
            <Col
            sm={6}
            >
            </Col>
            <Col sm={3}>
                <button className="Start-Button">Get Started</button>
            </Col>
        </Row>
        </div>
        <div style={{zIndex:'3'}}>
            <Row>
                <br /><br /><br /><br /><br />
            </Row>
            <Row>
                <Col sm={11}>
                </Col>
                <Col sm={1}>
                    <img src={GraphTrans} alt="..." height='700' width='700' fluid className="img-anim"/>
                </Col>
            </Row>
        </div>
    </Container>
    <Container>
        <Row></Row>
    </Container>
    </>)
}
export default LandingPage;