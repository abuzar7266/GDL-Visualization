import React from "react";
import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import '../assets/css/Home.css';
import GraphTrans from '../assets/img/GraphTrans.png';
import { useNavigate } from "react-router-dom";
import * as d3 from 'd3';
import { useRef } from "react";
import { useEffect } from "react";
import Graph from "../component/Graph.jsx"
import lesMis from "../assets/json/miserables.js"
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
                <div className="button-div" style={{zIndex:'3'}}>
                    <button className="Start-Button" onClick={() => navigate("/intro")}>Get Started</button>
                </div>
            </Col>
        </Row>
        </div>
        <div  style={{zIndex:'1', position:'absolute'}} class="svg-container">
            <Row>
                <Col>
                    <Graph id="HomeGraph" strength={-90} height={1000} width={1800} data={lesMis}/>
                </Col>
            </Row>
        </div>
        {/* <div>
            <Row>
                <Col>
                    <img src={GraphTrans} alt="..." height='700' width='700' fluid className="img-anim"/>
                </Col>
            </Row>
        </div> */}
    </Container>
    {/*<div className='easeIntroIn'>
        <Container style={{textAlign:'center',marginTop:'12%'}} fluid>
            <Row>
                <Col
                sm={1}
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
    </div>*/}
    </>)
}
export default LandingPage;