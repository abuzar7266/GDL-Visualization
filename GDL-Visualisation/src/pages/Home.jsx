import React from "react";
import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import '../assets/css/Home.css';
import GraphTrans from '../assets/img/GraphTrans.png';
import { useNavigate } from "react-router-dom";
const LandingPage = ()=>{
    const navigate = useNavigate();
    return (<>
    <Container style={{textAlign:'left'}}>
        <div  style={{zIndex:'2', position:'absolute'}}>
        <Row>
            <Col>
                <div className="title-div">
                    <span className="title">FYP Name</span><br />
                    <span className="subtitle">Algorithmic Visualisation of Geometric Deep Learning</span>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="button-div">
                    <button className="Start-Button" onClick={() => navigate("/intro")}>Get Started</button>
                </div>
            </Col>
        </Row>
        </div>
        <div style={{zIndex:'3'}}>
            <Row>
                <Col>
                </Col>
                <Col>
                    <img src={GraphTrans} alt="..." height='700' width='700' fluid className="img-anim"/>
                </Col>
            </Row>
        </div>
    </Container>
    </>)
}
export default LandingPage;