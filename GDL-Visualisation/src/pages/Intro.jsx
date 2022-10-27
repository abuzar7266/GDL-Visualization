import React from "react";
import Navbar from '../component/navbar.jsx';
import LandingGraph from "../component/LandingPageGraph.jsx";
import Graph from "../component/convNet";
import tree from '../assets/json/convNet.json';
import { useEffect,useState } from "react";
const Introduction = ()=>{
    const [data,setData] = useState({});
    const [count,setCount] = useState(0);
    const [state,setState] = useState(0);
    const [local,setLocal] = useState(0);
    const [iCount,setiCount] = useState(0);
    useEffect(()=>{
        setLocal(local+1);
        if(local==2000){
            if(count==0){
                setData(tree[`${(count+1)}`]);
                console.log(tree[`${(count+1)}`]);
                setCount(count+1);
                setiCount(iCount+1);
                setState(1);
            }
            else if(count<1){
                console.log(count,tree[`${(count+1)}`])
                setData(tree[`${(count+1)}`]);
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
            state==1 && (<Graph id="p3" height={500} width={1200} strength={-70} position="absolute" iCount={0} zIndex="2" data={data}/>)
        }
    </>)
}
export default Introduction;