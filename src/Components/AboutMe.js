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
                        <p>Hi! My name is Noah Colaco and I am a fourth-year Computer Science student at Ryerson University and I am currently on a co-op term with Ontario Treasury Board Secretariat. I am seeking a software-related position and I am available to start September 2021. Feel free to explore my personal projects and skills, as well as contact me at the bottom of the page through my LinkedIn or Email!</p>
                    </section>
                </div>
                
            </div>
        )
    }
}

export default AboutMe
