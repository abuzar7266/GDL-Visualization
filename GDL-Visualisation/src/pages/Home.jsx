import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import '../assets/css/Home.css';
import { useNavigate } from "react-router-dom";
import Graph from "../component/homeGraph.jsx"
import lesMis from "../assets/json/miserables.js"
import MyNavbar from "../component/navbar.jsx"

const LandingPage = ()=>{
    const navigate = useNavigate();
    return (<>
    <MyNavbar style={{}}/>
    <Container style={{textAlign:'left'}}>
        <div  style={{zIndex:'3', position:'absolute'}}>
        <Row>
            <Col>
                <div className="title-div">
                    <span className="title">MorphNet</span><br />
                    <span className="subtitle">Visualisation for novel mechanism of deep learning over non-euclidean data </span>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="button-div" style={{zIndex:'3'}}>
                    <button className="Start-Button" onClick={() => navigate("/vis")}>Get Started</button>
                </div>
            </Col>
        </Row>
        </div>
        <div  style={{zIndex:'1', position:'absolute'}} className="svg-content">
            <Row>
                <Col>
                    <Graph id="HomeGraph" strength={-80} height={800} width={1800} data={lesMis}/>
                </Col>
            </Row>
        </div>
        </Container>
    </>)
}
export default LandingPage;