import React, { Component } from 'react';
import './CSS/ContactMe.css';
import linkedinImage from './CSS/Images/linkedin.png';
import emailImage from './CSS/Images/email.jpg';

class ContactMe extends Component{
    render(){
        return (
            <div>
                <div className="contact" id="contact-me"></div>
                <section class="showcase">
                    <div class="container">
                        <h1>Contact Me</h1>
                    </div>
                </section>

                <section id="contact-me-section">
                    <div class="container">
                        <div class="linked-in-class">
                            <h2>LinkedIn</h2>
                            <a title="LinkedIn" href="https://www.linkedin.com/in/noah-colaco-224126163/" target="blank"><img id="linkedin-image" src={linkedinImage} alt="Linkedin"></img></a>
                        </div>
                        <div class="e-mail-class">
                            <h2>E-mail</h2>
                            <a title="noahcolaco@hotmail.com" href="mailto:noahcolaco@hotmail.com"><img id="email-image" src={emailImage} alt="E=mail"></img></a>
                        </div>    
                    </div>
                    <br>
                    <br>
                </section>
            </div>
        )
    }
}

export default ContactMe
