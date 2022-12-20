import { axisBottom } from "d3";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container,Col,Row } from "react-bootstrap";
import "../assets/css/specGraph.css";
import "../assets/css/Home.css"
import Simulate from '../component/simulationGraph';
import axios from 'axios'
const Input_Base = ()=>{
    const [data,setData] = useState({
        Links_Iterations:{},
        Node_Iterations:{}
    });
    const [countPerIter,setCountPerIter] = useState(0);
    const [countVis,setCountVis] = useState(1);
    const [stateVis,setStateVis] = useState(0);
    const [count,setCount] = useState(0);
    const [state,setState] = useState(0);
    const [iterations,setIterations] = useState(-1);
    const [graph,setGraph] = useState({
        nodes:[],
        links:[]
    });
    const [graph2,setGraph2] = useState({
        nodes:[],
        links:[]
    })
    const [source,setSource] = useState("");
    const [target,setTarget] = useState("");
    const [source2,setSource2] = useState("");
    const [target2,setTarget2] = useState("");
    const [edgeError,setEdgeError] = useState({
        n1:0,
        n2:0
    })
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
        color:0
    })
    const [edge2,setEdge2] = useState({
        source:"",
        target:"",
        color:0
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
        setSource(e.target.value);
        setTarget2(e.target.value);
    }
    const handleAddN2 = (e)=>{
        setSource2(e.target.value);
        setTarget(e.target.value);
    }
    const handleSubmitNode = ()=>{
        setGraph({
            ...graph,
            nodes:[...graph.nodes,node]
        });
        setGraph2({
            ...graph2,
            nodes:[...graph2.nodes,node]
        });
        setState2(1);
        setState(0);
        setCount(count+1)
    }
    const handleSubmitEdge = ()=>{
        setGraph({
            ...graph,
            links:[...graph.links,{source:source,target:target,color:0},{source:source2,target:target2,color:0}]
        });
        setGraph2({...graph2,
            links:[...graph2.links,{source:source,target:target,color:0},{source:source2,target:target2,color:0}]
        });
        setState2(1);
        setState(0)
    }
    useEffect(()=>{
        if(stateVis==2 && countVis<=iterations){
            if(countPerIter==0){
                console.log(countVis);
                //console.log(count.toString())
                setGraph({links:data['Links_Iterations'][countVis.toString()],nodes:data['Node_Iterations'][countVis.toString()]});
                setCountPerIter(300);
                setCountVis(countVis+1);
            }
            else{
                setCountPerIter(countPerIter-1);
            }
        }
    })
    const handleSubmitSimulate = ()=>{
        //Add fetch post get command to send data to api that will apply format structuring and will apply bfs
        //formated data.
        if(stateVis==0){
            console.log(graph2);
            setStateVis(1);
            axios.post('http://127.0.0.1:5000/BFS',{
                "nodes":graph2.nodes,
                "links":graph2.links
            })
            .then((result)=>{
                if(result.status==200 && result.data.status=='Success'){
                    axios.get('http://127.0.0.1:5000/BFS')
                    .then((response)=>{
                        console.log(response);
                        setData({Links_Iterations:response.data.Links_Iterations,Node_Iterations:response.data.Node_Iterations})
                        setIterations(response.data.iterations);
                        setStateVis(2);
                    })
                }
            })
        }
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
                                { graph.nodes.length>0 && <select name="node-1" id="node-1-select" onChange={handleAddN1} className="input-add" >
                                <option value="Default" id="Source-Default" hidden>Select Source</option>
                                    {
                                        graph.nodes.map((data,index)=>{
                                            return (
                                                <option id={index} value={data.id}>{data.id}</option>
                                            )
                                        })
                                    }
                                </select>}
                                {
                                    graph.nodes.length>0 && <select name="node-2" id="node-2-select" onChange={handleAddN2} 
                                    className="input-add" style={{marginTop:'10px'}}>
                                        <option value="Default" id="Target-Default" hidden>Select Target</option>
                                    {
                                        graph.nodes.map((data,index)=>{
                                            return (
                                                <option id={index} value={data.id}>{data.id}</option>
                                            )
                                        })
                                    }
                                    </select>
                                }
                                <button onClick={handleSubmitEdge} className="btn-add" style={{marginTop:'10px'}} >Add Edge</button>
                            </div>
                        </div>
                    </div>}
                </Col>
            </Row>
            <Row>
                {(state2==1 && <Simulate id="p1" height={300} width={100} strength={-50} data={graph}/>)}
            </Row>
        </Container>
    </>)
}
export default Input_Base;