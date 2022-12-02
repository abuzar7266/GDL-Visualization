import React from "react";
import { useState, useEffect, useRef } from "react";
import * as d3 from 'd3';
import "../assets/css/Graph.css";
var coord = {
  fx:0,
  fy:0
}
const Graph = (props)=>{
    const graphRef = useRef();
    useEffect(()=>{
      var divX = d3.select("#"+props.id);
      divX.selectAll("svg > *").remove();
      var svg = divX.append("svg").attr("height",`${props.height}`).attr("width",`${props.width}`)
      .classed("svg-content-2", true);
      var width = svg.attr("width");
      var height = svg.attr("height");
      var simmulation = d3
                      .forceSimulation(props.data.nodes)
                      .force(
                        "link",
                        d3
                          .forceLink()
                          .id(function(d) {
                            return d.id;
                          })
                          .distance(80)
                          .strength(1)
                          .links(props.data.links)
                      )
                      .force("charge",d3.forceManyBody())//.strength(props.strength))
                      .force("center",d3.forceCenter(width/2+500,height/2+200))
                      .on("tick",ticked);
      var link = svg
                  .append("g")
                  .attr("class","links")
                  .selectAll("line")
                  .data(props.data.links)
                  .enter()
                  .append("line")
                  .attr("stroke-width",function(d){
                    return 0.7;
                  })
                  .attr("stroke-linecap", "round")
                  .style("stroke",
                    function(d){
                      if(d.color==0){
                        return "#222B38";
                      }
                      else if(d.color==1){
                        return "red";
                      }
                    }
                  );
      var node = svg.append("g")
                  .attr("class", "nodes")
                .selectAll("g")
                .data(props.data.nodes)
                .enter().append("g")
      var circle = node
                 .append("circle")
                 .attr("r",function(d){
                  return 13;
                 })
                 .attr("fill",function(d){
                  if(d.color==0)
                    return "#8E939A";
                  if(d.color==1)
                    return "#000000";
                 })
                 .attr("stroke","#222B38")
                 .attr("stroke-width",function(d){
                  return 0.5;
                })
                 .call(
                    d3
                    .drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended)
                );
      var lables = node.append("text")
                .text(function(d) {
                  return d.id;
                })
                .attr('x', 15)
                .attr('y', 8)
                .attr("fill",function(d){
                  return "black";
                });
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
          circle
          .attr("cx",function(d){
            // if(d.x>50 && d.x<800){
              return d.x;
            //}
          })
          .attr("cy",function(d){
            //if(d.y>10 && d.y<400){
              return d.y;
            //}
          })
          lables
          .attr("dx",function(d){
            //if(d.x>50 && d.x<800){
              return d.x;
            //}
          })
          .attr("dy",function(d){
            //if(d.y>10 && d.y<400){
              return d.y;
            //}
          })
      }
      function dragstarted(event) {
        if (!event.active) simmulation.alphaTarget(1).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
        console.log(event);
      }
    
      function dragged(event) {
          event.subject.fx = event.x;
          event.subject.fy = event.y;
          console.log(event);
      }
      
      function dragended(event) {
        console.log(event);
        if (!event.active) simmulation.alphaTarget(0).restart();
        event.subject.fx = null;
        event.subject.fy = null;
      }
    })

    return (<> 
      <div id={props.id} style={{marginTop:"600px",marginLeft:"80vw",position:props.position,zIndex:props.zIndex}}>
      </div>
    </>)
}
export default Graph;