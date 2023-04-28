import React from "react";
import "./style.css"; 
const Home = () =>{
    return(
        <div className="HomeSection">
            
             <video  src="images/Home/1.mp4" autoPlay muted loop style={{ height:'auto',width:'100%'}}></video>
             <div className="obacity-1" >
             <h2 className="HomeTitle">salah bitar</h2>
             </div>
         <div className="container">
           
            <div className="HomeIn">
                
                <h4 className="Homeinfo">Creative Director</h4>
                <p className="HomeDesc">
                    Iam a professional <span>Ui Designer</span> and Front-End Developer creating modern and resposive designs to Web. 
                    Let us work together. Thank you. 
                </p>
                <button className="HomeBtn">Let's Begin</button>
         </div>
            </div>
        </div>
    )
    }

export default Home;

