import React from 'react';
import App from '../../Trap_Rain_Simulation/src/App';
import {IndexRoute, Route} from "react-router-dom";
import AboutPage from '../../Trap_Rain_Simulation/src/components/AboutPage';
import Board from '../../Trap_Rain_Simulation/src/components/Board';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Board}/>
        <Route path="/about" component={AboutPage}/>
    </Route>
);
