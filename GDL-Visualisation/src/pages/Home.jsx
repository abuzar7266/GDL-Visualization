import React from "react";
import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import '../assets/css/Home.css';
import GraphTrans from '../assets/img/GraphTrans.png';
import { useNavigate } from "react-router-dom";
const LandingPage = ()=>{
    const navigate = useNavigate();
    return (<>
    <div>
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
                <button className="Start-Button" onClick={() => navigate("/intro")}>Get Started</button>
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
        <br /><br />
    </Container>
    </div>
    <div style={{height:'100%',backgroundColor:'#9EC2EA',width:'110%',zIndex:'1',position:'absolute',color:'black',top:'130%'}}>
        <Container style={{textAlign:'center',marginTop:'12%'}} fluid>
            <Row>
                <Col
                sm={2}
                >
                
                </Col>
                <Col
                sm={8}
                >
                <div className="card-intro">
                    <p className="start-intro">Our website provides series of algoirthmic visualisation related to geometric deep learning. We have developed a story that demonstrates the all the traditional algorithms previously in animated visualisation</p>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>)
}
export default LandingPage;