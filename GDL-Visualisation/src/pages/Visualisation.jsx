import React from "react";
import Navbar from '../component/navbar.jsx';
import { useState, useEffect, useRef } from "react";
import lesMis from '../assets/json/miserables'; 
import * as d3 from 'd3';
const Test = ()=>{
    const graphRef = useRef();
    useEffect(()=>{
        console.log(window.innerWidth);
        console.log(window.innerHeight);
        const svg = d3.select("#canvas").append("svg").attr("width", window.innerWidth).attr("height", window.innerHeight);

        // d3.selectAll("svg > *").remove();

        svg.empty();
        // const circle = svg.append("circle")
        //     .attr("cx", 50)
        //     .attr("cy", 60)
        //     .attr("r", 8)
        //     .attr("fill", "red");

        // var noOfNeigbours = 5;
        // var linkVal = [];
        var vals = []
        for (var i = 0; i < lesMis.nodes.length; i++) {
            let coords = {
                id: lesMis['nodes'][i]['id'],
                x:-1,
                y:-1
            }
            coords.x =  ((Math.random() * window.innerWidth) % (window.innerWidth));
            coords.y =  ((Math.random() * window.innerHeight) % window.innerHeight);
            vals.push(coords);
        }


            const line = svg.selectAll("line");
            line.data(lesMis.links)
                .enter().append('line')
                .attr("x1", function(d) { 
                    let indexNo = -1;
                    for(var i=0;i<vals.length;i++){
                        if(vals[i].id == d.source){
                            indexNo = i;
                            break;
                        }
                    }
                    return vals[indexNo].x; 
                })
                .attr("y1", function(d) { 
                    let indexNo = -1;
                    for(var i=0;i<vals.length;i++){
                        if(vals[i].id == d.source){
                            indexNo = i;
                            break;
                        }
                    }
                    return vals[indexNo].y;  
                })
                .attr("x2", function(d) { 
                    let indexNo = -1;
                    for(var i=0;i<vals.length;i++){
                        if(vals[i].id == d.target){
                            indexNo = i;
                            break;
                        }
                    }
                    return vals[indexNo].x;  })
                .attr("y2", function(d) { let indexNo = -1;
                    for(var i=0;i<vals.length;i++){
                        if(vals[i].id == d.target){
                            indexNo = i;
                            break;
                        }
                    }
                    return vals[indexNo].y; 
                })
                .attr("stroke", "white")
                .attr("stroke-wdith", 2);
                const circle = svg.selectAll("circle")
                .data(vals)
                .enter().append("circle")
                // .attr("cy", function(d) { console.log("Y:" + d); return (((d + Math.random() * window.innerHeight) % (window.innerHeight-50)) + 50); })
                .attr("cy", function(d) { return d.y; })
                .attr("cx", function(d) { return d.x; })
                .attr('fill', 'cyan')
                .attr("r", 6);

        // var links = [];
        // for (var i = 0; i < vals.length; i++) {
        //     for (var j = 0; j < 5; j++) {
        //         var added = false;
        //         while(!added){
        //             var link = {
        //                 source:-1,
        //                 target:-1,
        //                 val:1
        //             }
        //             link.source = i;
        //             link.target = Math.random() % vals.length;
        //             for (var k = 0; k < links.length; k++) {
        //                 if((links[k].source == link.source && links[k].target == link.target) || (links[k].source == link.target && links[k].target == link.source)){
        //                     added = false;
        //                     break;
        //                 }
        //                 else{
        //                     added = true;
        //                     links.push(link);
        //                 }
        //             }
        //         }

        //     }
        // }

        // for(var i = 0; i < linkVal.length; i++){
        //     console.log(linkVal[i]);
        // }

        // for (var i = 0; i < vals.length; i++) {
        //     for (var j = 0; j < noOfNeigbours; j++) {
        //         var link = {
        //             source: 2,
        //             target: 2,
        //             val:1
        //         }
        //         // var temp = Math.random() % vals.length;
        //         // var sourceIndex = Math.random() % linkVal.length;
        //         var targetIndex = Math.random() % linkVal.length;
        //         while(linkVal[targetIndex] == i){
        //             var targetIndex = Math.random() % linkVal.length;
        //         }
        //         link.source = i;
        //         link.target = linkVal[targetIndex];
        //         links.pop(targetIndex);
        //         links.push(link);
        //     }
        // }

        // edge = {
        //     source:-1,
        //     target:-1
        // }
        // const circle = svg.selectAll("circle")
        //     .data(vals)
        //     .enter().append("circle")
        //     // .attr("cy", function(d) { console.log("Y:" + d); return (((d + Math.random() * window.innerHeight) % (window.innerHeight-50)) + 50); })
        //     .attr("cy", function(d) { return d.y; })
        //     .attr("cx", function(d) { return d.x; })
        //     .attr('fill', 'red')
        //     .attr("r", 6);


        // const line = svg.append("line");
        // line.data(links)
        //     .attr("x1", function(d) { return vals[d.source].x; })
        //     .attr("y1", function(d) { return vals[d.source].y; })
        //     .attr("x2", function(d) { return vals[d.target].x; })
        //     .attr("y2", function(d) { return vals[d.target].y; })
        //     .attr("stroke", "green")
        //     .attr("stroke-wdith", 7);


        // const line = svg.append("line");
        // line.data(links)
        //     .attr("x1", function(d) { return vals[d.source].x; })
        //     .attr("y1", function(d) { return vals[d.source].y; })
        //     .attr("x2", function(d) { return vals[d.target].x; })
        //     .attr("y2", function(d) { return vals[d.target].y; })
        //     .attr("stroke", "green")
        //     .attr("stroke-wdith", 7);
    },[])

    return (<> 
        <div id="canvas"></div>
    </>)
}
export default Test;