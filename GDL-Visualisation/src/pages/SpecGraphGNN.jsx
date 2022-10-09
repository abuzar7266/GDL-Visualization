import React from "react";
import { useState, useEffect, useRef } from "react";
import Graph from "../component/Graph.jsx";
import { Container,Col,Row } from "react-bootstrap";
import "../assets/css/specGraph.css";
const Input_Base = ()=>{
    const [state,setState] = useState(0);
    const [graphA,setGraphA] = useState({
        nodes:[],
        links:[]
    });
    const [graphB,setGraphB] = useState({
        nodes:[],
        links:[]
    });
    return (<>
        <Container>
            <Row>
                <p className="header">Simulate Graph Isomorphism Test</p>
            </Row>
            <Row>
                <Col
                md={6}
                lg={6}
                xl={6}
                >
                <div className="card">

                </div>
                </Col>
                <Col
                md={6}
                lg={6}
                xl={6}
                >
                <div className="card">

                </div>
                </Col>
            </Row>
        </Container>
    </>)
}
export default Input_Base;