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
                        <th title="Evaluate Tree"><p>Payroll Database Management System</p></th>
                    </tr>
                    <tr>
                        <td class="project-table-content">Produced a database management system coupled with a front-end design which allows employees and managers to interact with their company’s payroll system.</td>
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
