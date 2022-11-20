import React from "react";
import linkedin from './assets/linkedin.png'
import twitter from './assets/twitter.png'
import github from './assets/github.png'
import intagra from './assets/instagra.png'
import under_construction from './assets/under_construction.png'
import arrowRight from './assets/arrowRight.PNG'


function Comingsoon(){
    return(
        <div id="container">
             
                
            <div id="main">
                <div id="welcome">
                    <div id="welcomeHead">
                        <div id="back">
                            <img src={arrowRight} id="arrow" alt=""></img>
                             Back to Home
                        </div>
                        <div id="f1">Coming Soon!</div>
                        <div id="p">
                        We are currently working hard to build this page
                        but you can submit your email for update 
                        once the page is up.
                        </div>
                    </div>
                    <div id="construction">
                    <img src={under_construction} id="cons_img" alt=""></img>
                        
                    </div>
                </div>
                <div id="formdat">
                    <form >
                            <input type ="email" placeholder= "Your email" id="email"></input>
                            <button id ="btn" >Notify me</button>
                    </form>
                    <div id="spam">~Don't worry we will not spam you~</div>
                </div>
                
            </div>
            <footer>
                        <div id="social">    
                            <div id="socail_des">We are social</div>
                            <div id="socail_logo">
                                <img src={intagra} alt=""></img>
                                <img src={linkedin} alt=""></img>
                                <img src={twitter} alt=""></img>
                                <img src={github} alt=""></img>
                            </div>
                        </div>
                        <ul>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>FAQs</li>
                        </ul>
                </footer>

        </div>
    )
}
export default Comingsoon;