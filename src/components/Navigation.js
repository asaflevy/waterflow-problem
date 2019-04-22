import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Board from "./Board";
import AboutPage from "./AboutPage";

export class Header extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-toggleable-md navbar-inverse">
                        <a className="navbar-brand" href="/">waterflow-problem</a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Route path="/" exact component={Board}/>
                    <Route path="/about/" component={AboutPage}/>
                </div>
            </Router>
        )
    }
}