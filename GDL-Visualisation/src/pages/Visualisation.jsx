import React from "react";
import lesMis from '../assets/json/graph.js'; 
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
    <Container style={{marginTop:'200px'}}>
      <Row style={{marginTop:'100px'}}>
      <Container style={{height:'700px',width:'1400px'}} fluid>
        <Row>
          <Col md={6} lg={6} xl={6}>
            <Graph id="p1" height={600} width={700} strength={-40} position="absolute" zIndex="2" data={lesMis}/>
          </Col>
        </Row>
        <Row>
            <Col
            md={6}
            lg={6}
            xl={6}
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
      <Container style={{height:'700px',width:'1400px'}} fluid>
        <Row>
          <Col md={6} lg={6} xl={6}>
            <Graph id="p2" height={500} width={700} strength={-40} position="absolute" zIndex="2" data={lesMis}/>
          </Col>
        </Row>
        <Row>
            <Col
            md={6}
            lg={6}
            xl={6}
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
      <Container style={{height:'700px',width:'1400px'}} fluid>
        <Row>
          <Col md={6} lg={6} xl={6}>
            <Graph id="p3" height={500} width={700} strength={-40} position="absolute" zIndex="2" data={lesMis}/>
          </Col>
        </Row>
        <Row>
            <Col
            md={6}
            lg={6}
            xl={6}
            >
                <h3>
                  k-Wesfeiler-Lehman Test
                </h3>
                <p style={{textAlign:'center',fontSize:'23px',opacity:'70%'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
            </Col>
        </Row>
      </Container>
      </Row>
      <Row>
      <Container style={{height:'700px',width:'1400px'}} fluid>
        <Row>
          <Col md={6} lg={6} xl={6}>
            <Graph id="p4" height={500} width={700} strength={-40} position="absolute" zIndex="2" data={lesMis}/>
          </Col>
        </Row>
        <Row>
            <Col
            md={6}
            lg={6}
            xl={6}
            >
                <h3>
                  Message Passing Neural Network
                </h3>
                <p style={{textAlign:'center',fontSize:'23px',opacity:'70%'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
            </Col>
        </Row>
      </Container>
      </Row>
      <Row>
      <Container style={{height:'700px',width:'1400px'}} fluid>
        <Row>
        <Col md={6} lg={6} xl={6}>
            <Graph id="p5" height={500} width={700} strength={-40} position="absolute" zIndex="2" data={lesMis}/>
          </Col>
        </Row>
        <Row>
            <Col
            md={6}
            lg={6}
            xl={6}
            >
                <h3>
                  Graph Isomorphism
                </h3>
                <p style={{textAlign:'center',fontSize:'23px',opacity:'70%'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
            </Col>
        </Row>
      </Container>
      </Row>
      <Row>
      <Container style={{height:'700px',width:'1400px'}} fluid>
        <Row>
        <Col md={6} lg={6} xl={6}>
            <Graph id="p6" height={500} width={700} strength={-40} position="absolute" zIndex="2" data={lesMis}/>
          </Col>
        </Row>
        <Row>
            <Col
            md={6}
            lg={6}
            xl={6}
            >
                <h3>
                  PlaceHolder
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