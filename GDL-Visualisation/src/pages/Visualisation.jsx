import React from "react";
import * as d3 from 'd3';
import { Container } from "react-bootstrap";
import { useRef } from "react";
import { useEffect } from "react";
const Test = ()=>{
    const graphRef = useRef();
    useEffect(()=>{

        const svg = d3.select("#canvas").append("svg").attr("width", 400).attr("height", 400);
        const circle = svg.append("circle");
        circle.attr("cx", 50);
        circle.attr("cy", 60);
        circle.attr("r", 4);
        circle.attr("fill", "red");

        const line = svg.append("line");
        line.attr("x1", 15)
            .attr("y1", 47)
            .attr("x2", 99)
            .attr("y2", 15)
            .attr("stroke", "green")
            .attr("stroke-wdith", 7);
    },[])

    // useEffect(()=>{
    //     const svg = d3.select("#canvas").append("svg").attr("width", 100).attr("height", 100);
        
    // })
    return (<>
    <Container>
        <div id='canvas'>

        </div>
    </Container>
    </>)
}
export default Test;