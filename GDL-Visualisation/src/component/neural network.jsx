import React from "react";
import { useState, useEffect, useRef } from "react";
import * as d3 from 'd3';
import '../assets/css/Graph.css'
const Graph = (props)=>{
    useEffect(()=>{
      var divX = d3.select("#"+props.id);
      divX.selectAll('svg').remove();
      var svg = divX.append("svg").attr("height",`${props.height}`).attr("width",`${props.width}`)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .classed("graph", true);
      var width = svg.attr("width");
      var height = svg.attr("height");


      var link = svg
                  .append("g")
                  .attr("class","links")
                  .selectAll("line")
                  .data(props.data.links)
                  .enter()
                  .append("line")
                  .attr("stroke-width",function(d){
                    return 2;
                  })
                  .attr("x1",function(d){
                    var idx = props.data.nodes.findIndex(({id})=>(id==d.source))
                    let x = props.data.nodes[idx].x;
                    return x;
                  })
                  .attr("y1",function(d){
                    var idx = props.data.nodes.findIndex(({id})=>(id==d.source))
                    let y = props.data.nodes[idx].y;
                    return y;
                  })
                  .attr("x2",function(d){
                    var idx = props.data.nodes.findIndex(({id})=>(id==d.target))
                    let x = props.data.nodes[idx].x;
                    return x;
                  })
                  .attr("y2",function(d){
                    var idx = props.data.nodes.findIndex(({id})=>(id==d.target))
                    let y = props.data.nodes[idx].y;
                    return y;
                  })
                  .attr("stroke-linecap", "round")
                  .style("stroke",function(d){
                    if(props.iCount==0){
                      if(d.color==0){
                        return "gray";
                      }
                      else if(d.color==1){
                        return 'purple';
                      }
                      else if(d.color==2){
                        return 'red';
                      }
                    }else if(props.iCount==1){
                      if(d.color==0){
                        return "red";
                      }
                      else if(d.color==1){
                        return 'purple';
                      }
                      else if(d.color==2){
                        return 'gray';
                      }
                    }else{
                      if(d.color==0){
                        return "gray";
                      }
                      else if(d.color==1){
                        return 'purple';
                      }
                      else if(d.color==2){
                        return 'red';
                      }
                    }
                   });
      var node = svg
                 .append("g")
                 .selectAll("circle")
                 .data(props.data.nodes)
                 .enter()
                 .append("circle")
                 .attr("r",15)
                 .attr("cx",function(d){
                    return d.x;
                 })
                 .attr("cy",function(d){
                  return d.y;
                  })
                 .attr("fill",function(d)
                 {
                    if(props.iCount==0){
                      if(d.color==0){
                        return "gray";
                      }
                      else if(d.color==1){
                        return 'purple';
                      }
                      else if(d.color==2){
                        return 'red';
                      }
                    }else if(props.iCount==1){
                      if(d.color==0){
                        return "red";
                      }
                      else if(d.color==1){
                        return 'purple';
                      }
                      else if(d.color==2){
                        return 'gray';
                      }
                    }else{
                      if(d.color==0){
                        return "gray";
                      }
                      else if(d.color==1){
                        return 'purple';
                      }
                      else if(d.color==2){
                        return 'red';
                      }
                    }
                 })
                 .attr("stroke","purple")
                 .attr("stroke-width",function(d){
                  return 2;
                  })
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
        if (!event.active) simmulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
        console.log(event);
      }
    })

    return (<> 
      <div id={props.id} style={{marginLeft:props.marginLeft,marginTop:props.marginTop,position:props.position,zIndex:props.zIndex}}>
      </div>
    </>)
}
export default Graph;