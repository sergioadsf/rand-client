import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Main from './Main.js'
import Words from './Words.js'
import Teste3 from './Teste3.js'

class Menu extends Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/main">Main</Link></li>
                        <li><Link to="/about">Gerar Palavras</Link></li>
                        <li><Link to="/teste">Conferir sentenças</Link></li>
                    </ul>

                    <Route exact path="/main" component={Main}></Route>
                    <Route path="/about" component={Words} ></Route>
                    <Route path="/teste" component={Teste3} ></Route>
                </div>
            </Router>
        )
    }
}

export default Menu;