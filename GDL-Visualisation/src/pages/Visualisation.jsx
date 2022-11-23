import React from "react";
import lesMis from '../assets/json/graph.js'; 
import Graph from "../component/Graph.jsx";
import network from "../assets/json/neuralNetwork.js";
import NNN from '../component/neural network';
import MLTree from '../component/MLTreeGraph';
import tree from '../assets/json/tree.json'
import { Container,Col,Row } from "react-bootstrap";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import { KeyboardArrowDownTwoTone } from "@material-ui/icons";
import { KeyboardArrowUpTwoTone } from "@material-ui/icons";
import neuralVis from '../assets/json/neuralVis.json';
import convNet from '../assets/json/convNet.json';
import ConvNet from '../component/convNet';
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
  const [dataV3,setDataV3] = useState(tree[`${(1)}`]);
  const [stateV3,setStateV3] = useState(0)
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
  },[stateGet,setStateGet])
  useEffect(()=>{
    if(numVis==2){
        setLocal(local+1);
        if(local==10){
            if(count==0){
                setDataV3(tree[`${(count+1)}`]);
                setCount(count+1);
                setStateV3(1);
            }
            else if(count<11){
                console.log(count,tree[`${(count+1)}`])
                setDataV3(tree[`${(count+1)}`]);
                setCount(count+1);
            }
            else if(iCount>2){
              setNumVis(3);
            }
            else{
              setiCount(iCount+1);
            }
            setLocal(0);
        }
      }
  },[numVis,dataV3,local])
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
                  setCount(0);
                }
                setLocal(0);
            }
        }
    },[numVis,local,data,setData])
    const handlePrev = ()=>{
      if(numVis-1==0){
        setGraph1(JSON.parse(JSON.stringify(lesMis)))
        setCount(0)
        setStateGet(0);
        setIter({
          source:0,
          count:-1,
          length:-1
        })
      }
      if(numVis-1==1){
        setCount(0);
        setiCount(0);
        setData(neuralVis[`${(1)}`]);
        setLocal(0);
      }
      if(numVis-1==2){
        setCount(0);
        setiCount(0);
        setData(neuralVis[`${(1)}`]);
        setLocal(0);
      }
      if(numVis-1==3){

      }
      setNumVis(numVis-1);
    }
    const handleNext = ()=>{
      if(numVis+1==0){
        setGraph1(JSON.parse(JSON.stringify(lesMis)))
        setCount(0)
        setStateGet(0);
        setIter({
          source:0,
          count:-1,
          length:-1
        })
      }
      if(numVis+1==1){
        setCount(0);
        setiCount(0);
        setData(neuralVis[`${(1)}`]);
        setLocal(0);
      }
      if(numVis+1==2){
        setCount(0);
        setiCount(0);
        setData(neuralVis[`${(1)}`]);
        setLocal(0);
      }
      if(numVis+1==3){

      }
      setNumVis(numVis+1);
    }
    return (<>
    <Container style={{backgroundColor:'#A1ADC5',height:'90%',width:'100vw'}} fluid>
      <Row>
      <Container style={{height:'auto',width:'1700px',backgroundColor:'#A1ADC5',marginRight:'0'}} fluid>
      <Row>
          <button style={{height:"12.5vh", width:'100vw',background:'#222B38',opacity:'90%',marginTop:'2h',marginLeft:'0px',cusror:'pointer',color:'white',borderRadius:'0'}} onClick={handlePrev}>
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
              <div style={{height:"44.2vh", width:'auto',marginTop:'8%'}}>
              <Row>
                  <Col
                  md={5}
                  lg={5}
                  xl={5}
                  style={{marginLeft:'10vw'}}
                  >
                      <h3 style={{color:'black',opacity:'100%'}}>
                        Geometric Deep Learning
                      </h3>
                      <p style={{textAlign:'justify',fontSize:'23px',opacity:'80%'}}>Geometric deep learning (GDL) is based on neural network architectures that incorporate and process symmetry information. GDL bears promise for molecular modelling applications that rely on molecular representations with different symmetry properties and levels of abstraction.</p>
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
                <div style={{height:"44.2vh", width:'auto',marginTop:'8%'}}>
                <Row>
                    <Col
                    md={5}
                    lg={5}
                    xl={5}
                    style={{marginLeft:'10vw'}}
                    >
                        <h3 style={{color:'black',opacity:'100%'}}>
                          Neural Networks
                        </h3>
                        <p style={{textAlign:'justify',fontSize:'23px',opacity:'80%'}}>Neural networks, also known as artificial neural networks (ANNs) or simulated neural networks (SNNs), are a subset of machine learning and are at the heart of deep learning algorithms. Their name and structure are inspired by the human brain, mimicking the way that biological neurons signal to one another.</p>
                    </Col>
                </Row>    
                </div>   
              </div>
      }
      { numVis==2 && <div className="div-move">
                <Row>
                  <Col>
                    <MLTree id="p3" height={500} width={700} strength={-70} marginLeft="55vw" marginTop="10vh" position="absolute" iCount={0} zIndex="2" data={dataV3}/>
                  </Col>
                </Row>
                <Row>
                  <div style={{height:'75vh',width:'100vw',zIndex:'4',position:'absolute',background:'black',opacity:'20%'}}>

                  </div>
                </Row>
                <div style={{height:"44.2vh", width:'auto',marginTop:'8%'}}>
                <Row>
                    <Col
                    md={5}
                    lg={5}
                    xl={5}
                    style={{marginLeft:'10vw'}}
                    >
                        <h3 style={{color:'black',opacity:'100%'}}>
                          Machine Learning
                        </h3>
                        <p style={{textAlign:'justify',fontSize:'23px',opacity:'80%'}}>Machine Learning is a field that intersects statistical, probabilistic, computer science and algorithmic aspects arising from learning iteratively from data and finding hidden insights which can be used to build intelligent applications.</p>
                    </Col>
                </Row>    
                </div>   
              </div>
      }
       { numVis==3 && <div className="div-move">
                <Row>
                  <Col>
                  <ConvNet id="p3" height={500} width={1200} strength={-70} marginTop="30vh" marginLeft="20vw" position="absolute" iCount={0} zIndex="2" data={convNet["1"]}/>
                  </Col>
                </Row>
                <Row>
                  <div style={{height:'75vh',width:'100vw',zIndex:'4',position:'absolute',background:'black',opacity:'20%'}}>

                  </div>
                </Row>
                <div style={{height:"50.3vh", width:'auto',marginTop:'5%'}}>
                <Row>
                    <Col
                    md={10}
                    lg={10}
                    xl={10}
                    style={{marginLeft:'5vw'}}
                    >
                        <h3 style={{color:'black',opacity:'100%'}}>
                          Convolution Neural Network
                        </h3>
                        <p style={{textAlign:'justify',fontSize:'23px',opacity:'80%'}}>A Convolutional Neural Network (ConvNet/CNN) is a Deep Learning algorithm which can take in an input image, assign importance (learnable weights and biases) to various aspects/objects in the image and be able to differentiate one from the other. The pre-processing required in a ConvNet is much lower as compared to other classification algorithms. While in primitive methods filters are hand-engineered, with enough training, ConvNets have the ability to learn these filters/characteristics. </p>
                    </Col>
                </Row>    
                </div>   
              </div>
      }
          <Row>
          <button style={{height:"14vh", width:'100vw',background:'#222B38',opacity:'80%',marginTop:'14.5vh',marginLeft:'0px',cusror:'pointer',color:'white',borderRadius:'0'}} onClick={handleNext}>
            <KeyboardArrowDownTwoTone style={{fontSize:'70px'}}/>
          </button>
          </Row>
      </Container>
      </Row>
    </Container>
    </>)
}
export default Test;