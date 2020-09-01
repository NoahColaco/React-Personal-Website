import React, { Component } from 'react';
import './CSS/Projects.css';

class Projects extends Component{
    render(){
        return (
            <div>
                <div className="projects" id="projects"></div>

                <section class="showcase">
                    <div class="container">
                        <h1>Projects</h1>
                    </div>
                </section>

                <table id="project1-table">
                    <tr class="project-table-header">
                        <th title="Evaluate Tree"><p>Evaluate Tree</p></th>
                    </tr>
                    <tr>
                        <td class="project-table-content">A python function that evaluates a binary tree in list of list form. The first parameter will be the expression with operators and variables or numbers, and the second parameter is the values of the variables if you used them. A test file is also included, which tests different cases.</td>
                    </tr>
                </table>

                <table id="project2-table">
                    <tr class="project-table-header">
                        <th class="project-table-content" title="Vehicle Dealership Simulator"><p>Vehicle Dealership Simulator</p></th>
                    </tr>
                    <tr>
                        <td class="project-table-content">A dealership simulator that contains various commands for buying, returning, sorting and filtering cars. The program was created in Java and utilizes concepts such as Array lists, Objects, Inheritance, Interfaces, Exception Handling, and Collections.</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Projects