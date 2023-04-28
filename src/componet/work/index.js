import React, { Component, Fragment } from "react";
import {Part , PartDesc , PartTitle , Span , Icon , Line , WorkSection , WorkTitle} from './style.js'
import axios from "axios";
import './style.css';
import Data from "../../../src/js/data.js";


class Work extends Component{
   

      /*  state ={
            works : []
        }
            componentDidMount (){ 
                axios.get('js/data.json').then(res => {this.setState({works: res.data.works})})
            }*/
            
                
 render(){
   // const {works} = this.state;
    //const WorkList = works.map( WorkItem =>{
        const api = Data.map((WorkItem)=>{

        
        return(
            
            <div className="wwww">
                  <Part first={WorkItem.id}  key={WorkItem.id}>
                    
                                      <Icon className={WorkItem.icon_name}></Icon>
                                      <PartTitle>{WorkItem.title}</PartTitle>
                                      <Line />
                                      <PartDesc>
                                         {WorkItem.body}
                                      </PartDesc>
                       
                  </Part>
                  </div>
            
               
        )
    } )
        return(
           
            <WorkSection className="WorkSection1">
                
            <div className="container">
                
                <WorkTitle><Span>My</Span> Work</WorkTitle>

                           {api}
                
            </div>
        </WorkSection>
             
    )
    }
    
    
}

export default Work;