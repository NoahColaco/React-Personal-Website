import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './CSS/Header.css';
import { BrowserRouter } from 'react-router-dom';

class Header extends Component{
    scrollTo(location) {
        scroller.scrollTo( location, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
    }
    render(){
        return (
            <BrowserRouter>
                <header id="main-header">
                    <div class="container">
                        <h1>Noah Colaco</h1>
                    </div>
                </header>
                <nav id="nav-bar">
                    <div class="container">
                        <ul>
                            <li id="home-nav-link" title="Home">
                                <a className="home" to="home" onClick={() => this.scrollTo("home")} >About Me</a>
                            </li>
                            <li id="projects-nav-link" title="Projects">
                                <a className="home" to="projects" onClick={() => this.scrollTo("projects")} >Projects</a>
                            </li>
                            <li id="skills-nav-link" title="Skills">
                                <a className="home" to="skills" onClick={() => this.scrollTo("skills")} >Skills</a>
                            </li>
                            <li id="github-nav-link" title="Contact Me">
                                <a href="https://github.com/NoahColaco" target="blank">Github</a>
                            </li>
                            <li id="contact-me-nav-link" title="Contact Me">
                                <a className="home" to="contact-me" onClick={() => this.scrollTo("contact")} >Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </BrowserRouter>
        )
    }
}

export default Header