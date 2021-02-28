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
                                <li>SQL</li>
                                <li>C/C++</li>
                                <li>HTML/CSS</li>
                            </ul>
                        </div>
                        
                        <div id="second-list">
                            <h2>Frameworks and Tools</h2>
                            <ul >
                                <li>ReactJS</li>
                                <li>Git</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                                <li>Django</li>
                            </ul>
                        </div>
                        <div id="third-list">
                            <h2>Concepts</h2>
                            <ul >
                                <li>Agile</li>
                                <li>Data Mining</li>
                                <li>Object Oriented Programming</li>
                                <li>Testing/Validation</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Skills
