import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container,Col,Row } from "react-bootstrap";
import "../assets/css/specGraph.css";
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
    return (<>
        <Container>
            <Row className="center" style={{marginTop:"100px",position:'absolute',zIndex:'5'}}>
                <Col
                md={8}
                lg={8}
                xl={8}
                >
                { state==0 && <div>
                    <Row className="center">
                        <Col
                        md={12}
                        lg={12}
                        sm={12}
                        >
                        <button onClick={changeToAddNode} style={{height:'50px',width:'100px',color:'black',background:'orange'}}>Add Node</button>
                        </Col>
                        <Col
                        md={12}
                        lg={12}
                        sm={12}
                        >
                            <button onClick={changeToAddEdge} style={{height:'50px',width:'100px',color:'black',background:'orange',marginTop:'20px'}}>Add Edge</button>
                        </Col>
                </Row></div>}
                { state==1 && <div>
                        <div className="card" style={{background:'gray',border:'0',width:'17vw'}}>
                            <div className="card-body">
                                <input type="text" name="nodeName" onChange={handleAddNodeName} style={{height:'40px',width:'250px',borderRadius:'10px',background:'white',color:'gray',border:'1px solid gray',fontSize:'12px',paddingLeft:'10px'}} placeholder="Node Name"/> <br />
                                <input type="text" name="nodeVal" onChange={handleAddNodeVal} style={{marginTop:'10px',height:'40px',width:'250px',borderRadius:'10px',background:'white',color:'gray',border:'1px solid gray',fontSize:'12px',paddingLeft:'10px'}} placeholder="Node Value"/> <br />
                                <button onClick={handleSubmitNode} style={{marginTop:'10px',height:'40px',width:'120px',color:'black',background:'orange'}}>Add Node</button>
                            </div>
                        </div>
                    </div>}
                { state==2 && <div>
                        <div className="card" style={{background:'gray',border:'0',width:'17vw'}}>
                            <div className="card-body">
                                <input type="text" name="node1" onChange={handleAddN1} style={{height:'40px',width:'250px',borderRadius:'10px',background:'white',color:'gray',border:'1px solid gray'}}/>
                                <input type="text" name="node2" onChange={handleAddN2} style={{marginTop:'10px',height:'40px',width:'250px',borderRadius:'10px',background:'white',color:'gray',border:'1px solid gray'}}/>
                                <button onClick={handleSubmitEdge} style={{marginTop:"10px",height:'40px',width:'120px',color:'black',background:'orange'}}>Add Edge</button>
                            </div>
                        </div>
                    </div>}
                </Col>
            </Row>
            <Row>
                {(state2==1 && <Simulate id="p1" height={50} width={50} strength={-50} data={graph}/>)}
            </Row>
        </Container>
    </>)
}
export default Input_Base;