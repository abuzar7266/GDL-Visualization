import React from "react";
import lesMis from '../assets/json/graph.js'; 
import Graph from "../component/Graph.jsx";
import network from "../assets/json/neuralNetwork.js";
import NNN from '../component/neural network'
import { Container,Col,Row } from "react-bootstrap";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import { KeyboardArrowDownTwoTone } from "@material-ui/icons";
import { KeyboardArrowUpTwoTone } from "@material-ui/icons";
import neuralVis from '../assets/json/neuralVis.json';
import '../assets/css/vis-anima.css';
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
  const [data,setData] = useState(network);
  const [count,setCount] = useState(0);
  const [state,setState] = useState(0);
  const [local,setLocal] = useState(0);
  const [iCount,setiCount] = useState(0);
  const [graph1,setGraph1] = useState(JSON.parse(JSON.stringify(lesMis)));
  const [stateGet,setStateGet] = useState(0);
  const [numVis,setNumVis] = useState(0);
  const [mapping,setMapping] = useState([]);
  const [status,setStatus] = useState(0);
  const [iter,setIter] = useState({
    source:0,
    count:-1,
    length:-1
  })
  const [statusG1,setStatusG1] = useState(1);
  useEffect(()=>{
    if(stateGet==0){
      axios.get('http://127.0.0.1:5000/GNNGraph',{})
        .then((result)=>{
          setMapping(result['data']['Mapping'])
          setStateGet(1)
        })
    }
  },[])
  useEffect(()=>{
            console.log('Dum UseEffect called');
            if(stateGet==1){
              if(numVis==0){
                if(iter.count==iter.length & iter.source<56){
                  for(var i=0;i<graph1.links.length;i++){
                    graph1.links[i].color=0
                  }
                  if(iter.source>0){
                    graph1.nodes[iter.source-1].color = 2;
                  }
                  graph1.nodes[iter.source].color = 1;
                  setGraph1({nodes:graph1.nodes,links:graph1.links});
                  setIter({source:iter.source+1,length:mapping[iter.source+1].length,count:0});
                  setStatusG1(0);
                }
                else if(iter.count==iter.length & iter.source==56){
                  for(var i=0;i<graph1.links.length;i++){
                    graph1.links[i].color=0
                  }
                  graph1.nodes[iter.source-1].color = 2;
                  setGraph1({nodes:graph1.nodes,links:graph1.links});
                  setNumVis(1);
                  setStatusG1(0);
                }
                else{
                  var visCurr = mapping[`${iter.source}`][iter.count];
                  var idx = -1;
                  idx = graph1.links.findIndex((data)=>{
                    if(data.source.id==visCurr.source && data.target.id==visCurr.target){
                        return data.index;
                    }
                  });
                  if(idx<=-1){
                    idx = 0;
                  }
                  if(idx>=0){
                    var l = graph1.links[idx];
                    l.color = 1;
                    graph1.links[idx] = l;
                    setGraph1({nodes:graph1.nodes,links:graph1.links});
                    setIter({...iter,count:iter['count']+1});
                  }
                  else{
                    setIter({...iter,count:iter.count});
                  }
                  setStatusG1(0);
                }
              }
      }
    },[numVis,stateGet,graph1])
    useEffect(()=>{
      console.log('Called NNN');
      if(numVis==1){
        setLocal(local+1);
        if(local==10){
                  if(count==0){
                      setData(neuralVis[`${(count+1)}`]);
                      setCount(count+1);
                      setiCount(iCount+1);
                      setState(1);
                  }
                else if(count<19){
                    setData(neuralVis[`${(count+1)}`]);
                    setCount(count+1);
                }
                else if(iCount<2){
                    setCount(0);
                }else{
                  setNumVis(2);
                }
                setLocal(0);
            }
        }
    },[numVis,local])
    const handlePrev = ()=>{
      setNumVis(numVis-1);
    }
    const handleNext = ()=>{
      setNumVis(numVis+1);
    }
    return (<>
    <Container style={{backgroundColor:'#A1ADC5',height:'90%',width:'100vw'}} fluid>
      <Row>
      <Container style={{height:'auto',width:'1700px',backgroundColor:'#A1ADC5',marginRight:'0'}} fluid>
      <Row>
          <button style={{height:"12.5vh", width:'100vw',background:'black',opacity:'30%',marginTop:'2h',marginLeft:'0px',cusror:'pointer',color:'white',borderRadius:'0'}} onClick={handlePrev}>
            <KeyboardArrowUpTwoTone style={{fontSize:'70px'}}/>
          </button>
      </Row>
            { stateGet==1 && numVis==0 && <div className="div-move">
              <Row>
                <Col>
                  {<Graph id="p1" height={500} width={700} strength={-70} position="absolute" zIndex="2" data={graph1}/>}
                  {/*<NNN id="p1" height={700} width={900} marginLeft="40%" marginTop="6%" position="absolute" zIndex="2" data={network}/>*/}
                </Col>
              </Row>
              <Row>
                <div style={{height:'75vh',width:'100vw',zIndex:'4',position:'absolute',background:'black',opacity:'20%'}}>

                </div>
              </Row>
              <div style={{height:"auto", width:'auto',marginTop:'8%'}}>
              <Row>
                  <Col
                  md={5}
                  lg={5}
                  xl={5}
                  style={{marginLeft:'10vw'}}
                  >
                      <h3 style={{color:'black',opacity:'100%'}}>
                        Deep Learning
                      </h3>
                      <p style={{textAlign:'justify',fontSize:'23px',opacity:'80%'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
                  </Col>
              </Row>    
              </div>   
            </div>
            }
              { numVis==1 && <div className="div-move">
                <Row>
                  <Col>
                    <NNN id="p1" height={700} width={900} marginLeft="40%" position="absolute" marginTop="6%" zIndex="2" data={data}/>
                    {/*<NNN id="p1" height={700} width={900} marginLeft="40%" marginTop="6%" position="absolute" zIndex="2" data={network}/>*/}
                  </Col>
                </Row>
                <Row>
                  <div style={{height:'75vh',width:'100vw',zIndex:'4',position:'absolute',background:'black',opacity:'20%'}}>

                  </div>
                </Row>
                <div style={{height:"auto", width:'auto',marginTop:'8%'}}>
                <Row>
                    <Col
                    md={5}
                    lg={5}
                    xl={5}
                    style={{marginLeft:'10vw'}}
                    >
                        <h3 style={{color:'black',opacity:'100%'}}>
                          Deep Neural Network
                        </h3>
                        <p style={{textAlign:'justify',fontSize:'23px',opacity:'80%'}}>Donec nec condimentum est. Nunc eu sapien quis augue lacinia elementum. Nulla at sem non nibh dignissim venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere mollis. Curabitur gravida lacus at nunc sollicitudin, non feugiat nisi maximus. Ut scelerisque orci sit amet ex varius lacinia. Proin ut lorem et risus imperdiet pellentesque ac vel nisl. Donec gravida tellus ac volutpat gravida. Suspendisse ultrices leo ac vehicula sodales. Mauris accumsan magna nec tellus iaculis bibendum. Nunc ut placerat turpis, sed accumsan eros. Suspendisse volutpat erat nibh, vel interdum mi aliquet in. Pellentesque eu tincidunt tortor, nec mollis dolor.</p>
                    </Col>
                </Row>    
                </div>   
              </div>
      }
          <Row>
          <button style={{height:"14vh", width:'100vw',background:'black',opacity:'30%',marginTop:'14.5vh',marginLeft:'0px',cusror:'pointer',color:'white',borderRadius:'0'}} onClick={handleNext}>
            <KeyboardArrowDownTwoTone style={{fontSize:'70px'}}/>
          </button>
          </Row>
      </Container>
      </Row>
    </Container>
    </>)
}
export default Test;