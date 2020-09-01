import React, { Component } from 'react';
import './CSS/Skills.css';

class Skills extends Component{
    render(){
        return (
            <div>
                <div className="skills" id="skills"></div>

                <section class="showcase">
                    <div class="container">
                        <h1>Skills</h1>
                    </div>
                </section>

                <section id="skills-section">
                    <div class="container">
                        <div id="programming-languages-list">
                            <h2>Programming Languages</h2>
                            <ul>
                                <li>Python</li>
                                <li>Java</li>
                                <li>C/C++</li>
                            </ul>
                        </div>
                        
                        <div id="second-list">
                            <h2>Other</h2>
                            <ul >
                                <li>MySQL</li>
                                <li>Git</li>
                                <li>Node.js</li>
                            </ul>
                        </div>
                        <div id="third-list">
                            <h2>Front End</h2>
                            <ul >
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Skills