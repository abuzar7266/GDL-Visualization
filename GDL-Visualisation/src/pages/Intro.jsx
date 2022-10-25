import React from "react";
import Navbar from '../component/navbar.jsx';
import LandingGraph from "../component/LandingPageGraph.jsx";
import Graph from "../component/neural network";
import graph1 from '../assets/json/neuralNetwork';
import neuralVis from '../assets/json/neuralVis.json';
import { useEffect,useState } from "react";
const Introduction = ()=>{
    const [data,setData] = useState({});
    const [count,setCount] = useState(0);
    const [state,setState] = useState(0);
    const [local,setLocal] = useState(0);
    const [iCount,setiCount] = useState(0);
    useEffect(()=>{
        setLocal(local+1);
        if(local==1000){
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
            }
            setLocal(0);
        }
    })
    return (<>
        <LandingGraph/>
        {
            state==1 && (<Graph id="p1" height={700} width={900} marginLeft="40%" marginTop="2%" iCount={iCount}position="absolute" zIndex="2" data={data}/>)
        }
    </>)
}
export default Introduction;