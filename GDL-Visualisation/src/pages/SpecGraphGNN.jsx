import { axisBottom } from "d3";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container,Col,Row } from "react-bootstrap";
import "../assets/css/specGraph.css";
import "../assets/css/Home.css"
import Simulate from '../component/simulationGraph';
const Input_Base = ()=>{
    const [count,setCount] = useState(0);
    const [state,setState] = useState(0);
    const [nodes,setNodes] = useState({});
    const [edges,setEdges] = useState([]);
    const [graph,setGraph] = useState({
        nodes:[],
        links:[]
    });
    const [state2,setState2] = useState(0);
    const [node,setNode] = useState({
        id:"",
        name:"",
        val:"",
        color:0
    })
    const [edge,setEdge] = useState({
        source:"",
        target:"",
        color:1
    })
    const changeToAddNode = ()=>{
        setNode({...node,id:`${count}`});
        setState(1);
    }
    const changeToAddEdge = ()=>{
        setState(2);
    }
    const handleAddNodeName = (e)=>{
        setNode({...node,id:e.target.value,name:e.target.value});
    }
    const handleAddNodeVal = (e)=>{
        setNode({...node,val:e.target.value});
    }
    const handleAddN1 = (e)=>{
        setEdge({...edge,source:e.target.value});
    }
    const handleAddN2 = (e)=>{
        setEdge({...edge,target:e.target.value});
    }
    const handleSubmitNode = ()=>{
        setGraph({
            ...graph,
            nodes:[...graph.nodes,node]
        });
        setState2(1);
        setState(0);
        setCount(count+1)
    }
    const handleSubmitEdge = ()=>{
        setGraph({
            ...graph,
            links:[...graph.links,edge]
        });
        setState2(1);
        setState(0)
    }
    useEffect(()=>{
        console.log(graph);
    })
    const handleSubmitSimulate = ()=>{
        //Add fetch post get command to send data to api that will apply format structuring and will apply bfs
        //formated data.
        console.log('Apply Algorithm: ',graph)
    }
    return (<>
        <Container>
            <Row style={{position:'absolute',zIndex:'2'}}>
                <div style={{marginTop:'20px',background:'#222B38',color:'white',height:'60px',width:'500px',marginLeft:'100%',borderRadius:'20px'}}>
                    <h1 style={{padding:'10px',paddingTop:'12px',opacity:'50%'}}>Simulate Graph Model</h1>
                </div>
            </Row>
            <Row className="center" style={{marginTop:"100px",marginLeft:'10px',position:'absolute',zIndex:'5'}}>
                <Col
                md={8}
                lg={8}
                xl={8}
                >
                { state==0 && <div>
                    <Row className="center">
                        <Col
                        md={5}
                        lg={5}
                        sm={5}
                        >
                        <button onClick={changeToAddNode} className="Start-Button" style={{borderRadius:'10px 10px 10px 10px'}}>Add Node</button>
                        </Col>
                        <Col
                        md={5}
                        lg={5}
                        sm={5}
                        >
                            <button onClick={changeToAddEdge} className="Start-Button" style={{marginLeft:'70px',borderRadius:'10px 10px 10px 10px'}}>Add Edge</button>
                        </Col>
                </Row>
                <Row className="row center">
                        <Col
                        md={5}
                        lg={5}
                        sm={5}
                        >
                        <button onClick={handleSubmitSimulate} className="Start-Button" style={{marginTop:'10px',marginLeft:'90px',borderRadius:'10px 10px 10px 10px'}}>Simulate</button>
                        </Col>
                </Row>
                </div>}
                { state==1 && <div>
                        <div className="card" style={{background:'#222B38',border:'0',width:'17vw'}}>
                            <div className="card-header center" style={{paddingTop:'20px'}}>
                                <h4 style={{color:'white',padding:'1px',paddingTop:'3px',opacity:'50%'}}>Add New Node</h4>
                            </div>
                            <div className="card-body">
                                <input type="text" name="nodeName" onChange={handleAddNodeName} className="input-add" placeholder="Node Name"/> <br />
                                <input type="text" name="nodeVal" onChange={handleAddNodeVal} className="input-add" placeholder="Node Value" style={{marginTop:'10px'}}/> <br />
                                <button onClick={handleSubmitNode} className="btn-add" style={{marginTop:'10px'}} >Add Node</button>
                            </div>
                        </div>
                    </div>}
                { state==2 && <div>
                        <div className="card" style={{background:'#222B38',border:'0',width:'17vw'}}>
                            <div className="card-header center">
                            <h4 style={{color:'white',padding:'1px',paddingTop:'3px',opacity:'50%'}}>Add New Edge</h4>
                            </div>
                            <div className="card-body">
                                <input type="text" name="node1" onChange={handleAddN1} className="input-add" placeholder="First Node Name"/>
                                <input type="text" name="node2" onChange={handleAddN2} className="input-add" style={{marginTop:'10px'}} placeholder="Second Node Name"/>
                                <button onClick={handleSubmitEdge} className="btn-add" style={{marginTop:'10px'}} >Add Edge</button>
                            </div>
                        </div>
                    </div>}
                </Col>
            </Row>
            <Row>
                {(state2==1 && <Simulate id="p1" height={100} width={100} strength={-100} data={graph}/>)}
            </Row>
        </Container>
    </>)
}
export default Input_Base;