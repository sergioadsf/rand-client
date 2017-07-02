import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import Main from '../generate/Main.js';
import ListWordDB from '../worddb/ListWordDB.js';
import Sentence from '../sentence/Sentence.js';

import '../Nav.css';

class MainMenu extends Component {

    constructor() {
        super();
        this.initBind();
        this.state = { main: 'active' };
    }

    clicou(p) {
        this.setState({ main: 'active' });
        console.log(p)
    }

    initBind() {
        this.clicou = this.clicou.bind(this);
    }
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li ><Link to="/">MAIN</Link></li>
                        <li><Link to="/list" >WORDS IN DB</Link></li>
                        <li><Link to="/sentence">SENTENCES</Link></li>
                    </ul>

                    <Route exact path="/" component={Main}></Route>
                    <Route path="/list" component={ListWordDB} ></Route>
                    <Route path="/sentence" component={Sentence} ></Route>
                </div>
            </Router>
        )
    }
}

export default MainMenu;