import React from "react";
import lesMis from '../assets/json/graph.js'; 
import Graph from "../component/Graph.jsx";
import { Container,Col,Row } from "react-bootstrap";
import '../assets/css/visualize.css';
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
    <Container style={{backgroundColor:'#A1ADC5',height:'100%',width:'100%'}} fluid>
      <Row>
      <Container style={{height:'800px',width:'1700px',zIndex:6,position:'absolute'}} fluid>
        <Row className="header-design">
        </Row>
      </Container>
      <Container>
        <Row style={{marginLeft:'10%',zIndex:7,position:'absolute',marginTop:'10%'}}>
            <Col
            md={11}
            lg={11}
            xl={11}
            >
                <h3 style={{color:'white'}}>
                  MorphNet
                </h3>
                <p style={{textAlign:'center',fontSize:'23px',opacity:'70%',color:'white'}}>MorphNet is a geometric deep learning model that can be trained to classify graph data structures.MorphNet is a geometric deep learning model that can be trained to classify graph data structures.MorphNet is a geometric deep learning model that can be trained to classify graph data structures.MorphNet is a geometric deep learning model that can be trained to classify graph data structures.MorphNet is a geometric deep learning model that can be trained to classify graph data structures.MorphNet is a geometric deep learning model that can be trained to classify graph data structures.MorphNet is a geometric deep learning model that can be trained to classify graph data structures.MorphNet is a geometric deep learning model that can be trained to classify graph data structures.MorphNet is a geometric deep learning model that can be trained to classify graph data structures.</p>
            </Col>
        </Row>
      </Container>
      </Row>
      <Row>
      <Container style={{height:'850px',width:'1700px',backgroundColor:'#A1ADC5',marginRight:'0',marginTop:'60%'}} fluid>
        <Row style={{marginLeft:'10%',marginTop:'10%'}}>
          <Col>
            <Graph id="p1" height={500} width={700} strength={-40} position="absolute" zIndex="2" data={lesMis}/>
          </Col>
        </Row>
        <Row style={{marginLeft:'10%'}}>
            <Col
            md={5}
            lg={5}
            xl={5}
            >
                <h3 style={{color:'black'}}>
                  Geometric Deep Learning
                </h3>
                <p style={{textAlign:'justify',fontSize:'23px',opacity:'70%',color:'black'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
            </Col>
        </Row>
      </Container>
      </Row>
      <Row>
      <Container style={{height:'850px',width:'1700px',backgroundColor:'#222B38',marginRight:'0'}} fluid>
        <Row style={{marginLeft:'10%',marginTop:'10%'}}>
          <Col>
            <Graph id="p2" height={500} width={700} strength={-40} position="absolute" zIndex="2" data={lesMis}/>
          </Col>
        </Row>
        <Row style={{marginLeft:'10%'}}>
            <Col
            md={5}
            lg={5}
            xl={5}
            >
                <h3 style={{color:'white'}}>
                  Geometric Deep Learning
                </h3>
                <p style={{textAlign:'justify',fontSize:'23px',opacity:'70%',color:'white'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
            </Col>
        </Row>
      </Container>
      </Row>
      <Row>
      <Container style={{height:'850px',width:'1700px',backgroundColor:'#A1ADC5',marginRight:'0'}} fluid>
        <Row style={{marginLeft:'10%',marginTop:'10%'}}>
          <Col>
            <Graph id="p3" height={500} width={700} strength={-40} position="absolute" zIndex="2" data={lesMis}/>
          </Col>
        </Row>
        <Row style={{marginLeft:'10%'}}>
            <Col
            md={5}
            lg={5}
            xl={5}
            >
                <h3 style={{color:'black'}}>
                  Geometric Deep Learning
                </h3>
                <p style={{textAlign:'justify',fontSize:'23px',opacity:'70%',color:'black'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
            </Col>
        </Row>
      </Container>
      </Row>
      <Row>
      <Container style={{height:'850px',width:'1700px',backgroundColor:'#222B38',marginRight:'0'}} fluid>
        <Row style={{marginLeft:'10%',marginTop:'10%'}}>
          <Col>
            <Graph id="p4" height={500} width={700} strength={-40} position="absolute" zIndex="2" data={lesMis}/>
          </Col>
        </Row>
        <Row style={{marginLeft:'10%'}}>
            <Col
            md={5}
            lg={5}
            xl={5}
            >
                <h3 style={{color:'white'}}>
                  Geometric Deep Learning
                </h3>
                <p style={{textAlign:'justify',fontSize:'23px',opacity:'70%',color:'white'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
            </Col>
        </Row>
      </Container>
      </Row>
      <Row>
      <Container style={{height:'850px',width:'1700px',backgroundColor:'#A1ADC5',marginRight:'0'}} fluid>
        <Row style={{marginLeft:'10%',marginTop:'10%'}}>
          <Col>
            <Graph id="p5" height={500} width={700} strength={-40} position="absolute" zIndex="2" data={lesMis}/>
          </Col>
        </Row>
        <Row style={{marginLeft:'10%'}}>
            <Col
            md={5}
            lg={5}
            xl={5}
            >
                <h3 style={{color:'black'}}>
                  Geometric Deep Learning
                </h3>
                <p style={{textAlign:'justify',fontSize:'23px',opacity:'70%',color:'black'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
            </Col>
        </Row>
      </Container>
      </Row>
      <Row>
      <Container style={{height:'850px',width:'1700px',backgroundColor:'#222B38',marginRight:'0'}} fluid>
        <Row style={{marginLeft:'10%',marginTop:'10%'}}>
          <Col>
            <Graph id="p6" height={500} width={700} strength={-40} position="absolute" zIndex="2" data={lesMis}/>
          </Col>
        </Row>
        <Row style={{marginLeft:'10%'}}>
            <Col
            md={5}
            lg={5}
            xl={5}
            >
                <h3 style={{color:'white'}}>
                  Geometric Deep Learning
                </h3>
                <p style={{textAlign:'justify',fontSize:'23px',opacity:'70%',color:'white'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
            </Col>
        </Row>
      </Container>
      </Row>
    </Container>
    </>)
}
export default Test;