import React, { Component } from 'react';
import './CSS/AboutMe.css';


class AboutMe extends Component{
    render(){
        return(
            <div>
                <div className="home" id="home"></div>
                <section class="showcase">
                    <div class="container">
                        <h1>About Me</h1>
                    </div>
                </section>

                <div class="container">
                    <section id="main">
                        <h1>Welcome</h1>
                        <p>Hi! My name is Noah Colaco and I am currently a third-year Computer Science student at Ryerson University. I am currently seeking a position in the technology industry and throughout my years at Ryerson I have developed a broad set of skills. Feel free to explore my personal projects and skills, as well as contact me at the bottom of the page!</p>
                    </section>
                </div>
                
            </div>
        )
    }
}

export default AboutMe