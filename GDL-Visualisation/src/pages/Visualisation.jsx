import React from "react";
import Navbar from '../component/navbar.jsx';
import { useState, useEffect, useRef } from "react";
import lesMis from '../assets/json/miserables'; 
import * as d3 from 'd3';
const Test = ()=>{
    const graphRef = useRef();
    useEffect(()=>{
      var svg = d3.select("svg");
      d3.selectAll("svg > *").remove()
      var width = svg.attr("width");
      var height = svg.attr("height");

      var graph = {
        nodes: [
          { name: "Alice" },
          { name: "Bob" },
          { name: "Chen" },
          { name: "Dawg" },
          { name: "Ethan" },
          { name: "George" },
          { name: "Frank" },
          { name: "Hanes" }
        ],
        links: [
          { source: "Alice", target: "Bob" },
          { source: "Chen", target: "Bob" },
          { source: "Dawg", target: "Chen" },
          { source: "Hanes", target: "Frank" },
          { source: "Hanes", target: "George" },
          { source: "Dawg", target: "Ethan" }
        ]
      };

      var simmulation = d3
                      .forceSimulation(lesMis.nodes)
                      .force(
                        "link",
                        d3
                          .forceLink()
                          .id(function(d) {
                            return d.id;
                          })
                          .links(lesMis.links)
                      )
                      .force("charge",d3.forceManyBody().strength(-50))
                      .force("center",d3.forceCenter(width /2,height /2))
                      .on("tick",ticked);
      
      var link = svg
                  .append("g")
                  .attr("class","links")
                  .selectAll("line")
                  .data(lesMis.links)
                  .enter()
                  .append("line")
                  .attr("stroke-width",function(d){
                    return 0.5;
                  })
                  .style("stroke","white");
      var node = svg
                 .append("g")
                 .selectAll("circle")
                 .data(lesMis.nodes)
                 .enter()
                 .append("circle")
                 .attr("r",5)
                 .attr("fill",function(d){
                  return "cyan";
                 })
                 .attr("stroke","cyan")
                 .call(
                    d3
                    .drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended)
                );
      function ticked(){
          link
          .attr("x1",function(d){
            return d.source.x;
          })
          .attr("y1",function(d){
            return d.source.y;
          })
          .attr("x2",function(d){
            return d.target.x;
          })
          .attr("y2",function(d){
            return d.target.y;
          })
          node
          .attr("cx",function(d){
            return d.x;
          })
          .attr("cy",function(d){
            return d.y;
          })
      }
      function dragstarted(event) {
        if (!event.active) simmulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
        console.log(d);
      }
    
      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }
      
      function dragended(event) {
        if (!event.active) simmulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
    })

    return (<> 
      <div>
        <svg height="700" width="1300">

        </svg>
      </div>
    </>)
}
export default Test;