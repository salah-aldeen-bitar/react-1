import React from "react";
import  "./style.css";
import img_poto1 from "../../../src/images/Portfolio/portfolio-img1.jpg";
import img_poto2 from "../../../src/images/Portfolio/portfolio-img2.jpg";
import img_poto3 from "../../../src/images/Portfolio/portfolio-img3.jpg";
import img_poto4 from "../../../src/images/Portfolio/portfolio-img4.jpg";
import img_poto5 from "../../../src/images/Portfolio/portfolio-img5.jpg";
import img_poto6 from "../../../src/images/Portfolio/portfolio-img6.jpg";
import img_poto7 from "../../../src/images/Portfolio/portfolio-img7.jpg";
import img_poto8 from "../../../src/images/Portfolio/portfolio-img8.jpg";
const Protflio = () =>{
    return(
        <div className="portfolio">
        <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
        <ul className="portfolio-list">
            <li className="portfolio-item active">All</li>
            <li className="portfolio-item">HTML</li>
            <li className="portfolio-item">Photoshop</li>
            <li className="portfolio-item">Wordpress</li>
            <li className="portfolio-item">Mobile</li>
        </ul>
        
        <div className="box">
            
            <div>
                <img src={img_poto1} alt=""/>
                <p className="overlay">
                    <span>
                        Show Image
                    </span>
                </p>
            </div>
            
            <div>
                <img src={img_poto2} alt=""/>
                <p className="overlay">
                    <span>
                        Show Image
                    </span>
                </p>
            </div>
            
            <div>
                <img src={img_poto3} alt=""/>
                <p className="overlay">
                    <span>
                        Show Image
                    </span>
                </p>
            </div>
            
            <div>
                <img src={img_poto4} alt=""/>
                <p className="overlay">
                    <span>
                        Show Image
                    </span>
                </p>
            </div>
            
            <div>
                <img src={img_poto5} alt=""/>
                <p className="overlay">
                    <span>
                        Show Image
                    </span>
                </p>
            </div>
            
            <div>
                <img src={img_poto6} alt=""/>
                <p className="overlay">
                    <span>
                        Show Image
                    </span>
                </p>
            </div>
            
            <div>
                <img src={img_poto7} alt=""/>
                <p className="overlay">
                    <span>
                        Show Image
                    </span>
                </p>
            </div>
            
            <div>
                <img src={img_poto8} alt=""/>
                <p className="overlay">
                    <span>
                        Show Image
                    </span>
                </p>
            </div>
            
        </div>
        
    </div>
    )
}

export default Protflio;