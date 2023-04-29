import React, { Component } from "react";
import {Social,SocialMedia,Span,SpanInfo,I,P} from "./style.js";
import axios from "axios";
import Footer from "../foooter/index.js";
import "./style.css";
import api_social from "../../../src/js/datasocial.js"


class Socialmedia extends Component{
   /* state ={
        social:[]
    }

    componentDidMount(){
        axios.get('js/data.json').then(res=>{this.setState({social: res.data.social})})
    }*/

    
    render(){

        //const {social} = this.state
        const SocialList = api_social.map( (SocialItem)=>{
            return(
                <Social key={SocialItem.id} item={SocialItem.id} >
                    <I className={SocialItem.icon}></I>
                    <P>
                        <Span className={SocialItem.title}>Follow Me on</Span>
                        <SpanInfo className={SocialItem.body}>Social Facebook</SpanInfo>
                    </P>
                </Social>
            )
        })
        return(
            <React.Fragment>
           <div className="container-social">    
            <SocialMedia>
       
                {SocialList}
                
                
            </SocialMedia>
            </div> 
            <Footer/>

            </React.Fragment>
        )
    }
    

}
export default Socialmedia;