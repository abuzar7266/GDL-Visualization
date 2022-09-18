import React from "react";
import Navbar from '../component/navbar.jsx';
import { useState, useEffect, useRef } from "react";
import lesMis from '../assets/json/miserables'; 
import * as d3 from 'd3';
import Graph from "../component/Graph.jsx";
import { Container,Col,Row } from "react-bootstrap";
var data1 = {
  nodes:[
    {id:0},
    {id:1},
    {id:2},
    {id:3},
    {id:4}
  ],
  links:[
    {source:0,target:1},
    {source:0,target:4},
    {source:1,target:2},
    {source:3,target:2},
    {source:4,target:3},
  ]
}
var data2 = {
  nodes:[
    {id:0},
    {id:1},
    {id:2},
    {id:3},
    {id:4}
  ],
  links:[
    {source:0,target:3},
    {source:0,target:2},
    {source:4,target:2},
    {source:4,target:1},
    {source:1,target:3},
  ]
}

const Test = ()=>{
    return (<> 
    <Container>
      <Row>
        <Col
        lg={6}
        xl={6}
        md={6}
        >
        
        </Col>
        <Col
        lg={2}
        xl={2}
        md={2}
        >
        <Graph id="p1" height={70} width={200} strength={-90} data={data1}/>
        </Col>
        <Col
        lg={2}
        xl={2}
        md={2}
        >
        <Graph id="p2" height={50} width={200} strength={-90} data={data2}/>
        </Col>
      </Row>
      <Row
        style={{height:'500px',width:'1150px',marginTop:'0px'}}
      >
        <Col
          md={10}
          lg={10}
          xl={10}
        >
        
        </Col>
        <Col
          md={2}
          lg={2}
          xl={2}
        >
          <div>
          <Graph id="p3" height={500} width={700} strength={-30} data={lesMis}/>
          </div>
        </Col>
      </Row>
    </Container>
        {/*<Graph id="p2" height={700} width={700} data={data2}/>*/}
    </>)
}
export default Test;