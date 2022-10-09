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

var data3 = {
  nodes:[
    {id:0},
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6}
  ],
  links:[
    {source:0,target:3},
    {source:0,target:2},
    {source:4,target:2},
    {source:4,target:1},
    {source:1,target:3},
    {source:5,target:3},
    {source:5,target:2},
    {source:6,target:2},
    {source:5,target:1},
    {source:6,target:3}
  ]
}
const Test = ()=>{
    return (<>
    <Container>
      <Row style={{textAlign:'center',marginLeft:'25%',marginTop:'100px'}}>
        <h1>Visual Representation of Research Progress</h1>
      </Row>
      <Row style={{marginTop:'100px'}}>
      <Container style={{height:'700px',width:'1200px'}}>
        <Row>
            <Graph id="p1" height={500} width={800} strength={-40} position="absolute" zIndex="2" data={lesMis}/>
        </Row>
        <Row
        style={{marginLeft:'100px'}}
        >
            <Col
            md={7}
            lg={7}
            xl={7}
            >
                <h3>
                  Geometric Deep Learning
                </h3>
                <p style={{textAlign:'center',fontSize:'23px',opacity:'70%'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
            </Col>
        </Row>
      </Container>
      </Row>
      <Row>
      <Container style={{height:'700px',width:'1200px'}}>
        <Row>
            <Col
            md={12}
            lg={12}
            xl={12}
            >
            <Graph id="p2" height={500} width={800} strength={-40} position="absolute" zIndex="2" data={data1}/>
            </Col>
        </Row>
        <Row
        style={{marginLeft:'100px'}}
        >
            <Col
            md={7}
            lg={7}
            xl={7}
            >
                <h3>
                  Graph Neural Network
                </h3>
                <p style={{textAlign:'center',fontSize:'23px',opacity:'70%'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
            </Col>
        </Row>
      </Container>
      </Row>
      <Row>
      <Container style={{height:'700px',width:'1200px'}}>
        <Row>
            <Col
            md={12}
            lg={12}
            xl={12}
            >
            <Graph id="p3" height={500} width={800} strength={-40} position="absolute" zIndex="2" data={data2}/>
            </Col>
        </Row>
        <Row
        style={{marginLeft:'100px'}}
        >
            <Col
            md={7}
            lg={7}
            xl={7}
            >
                <h3>
                  K-Wesfeiler Lehman
                </h3>
                <p style={{textAlign:'center',fontSize:'23px',opacity:'70%'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
            </Col>
        </Row>
      </Container>
      </Row>
      <Row>
      <Container style={{height:'700px',width:'1200px'}}>
        <Row>
            <Col
            md={12}
            lg={12}
            xl={12}
            >
            <Graph id="p4" height={500} width={800} strength={-40} position="absolute" zIndex="2" data={data3}/>
            </Col>
        </Row>
        <Row
        style={{marginLeft:'100px'}}
        >
            <Col
            md={7}
            lg={7}
            xl={7}
            >
                <h3>
                  Message Passing Neural Network
                </h3>
                <p style={{textAlign:'center',fontSize:'23px',opacity:'70%'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
            </Col>
        </Row>
      </Container>
      </Row>
    </Container>
    </>)
}
export default Test;