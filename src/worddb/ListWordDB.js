import React, { Component } from 'react';

import App from '../App.js';
import Words from '../component/Words.js'
import Header from '../component/Header.js'
import Form from '../component/Form.js'

const initialState = {
    items: [], isListPressed: false
};

class ListWordDB extends Component {

    constructor() {
        super();
        this.initBind();
        this.initState();
    }

    initState() {
        this.state = initialState;
    }

    resetState() {
        this.setState(initialState);
    }

    initBind() {
        this.onClear = this.onClear.bind(this);
        this.onList = this.onList.bind(this);
    }

    onList = () => {
        this.setState({ isListPressed: true })

        fetch(App.JAVA_APP + "words/listAll")
            .then(response => response.json())
            .then(items => {
                this.setState({ items: items, isListPressed: false })
            });
    }

    onClear() {
        this.resetState();
    }

    render() {
        return (
            <div>
                <Header title="LIST WORDS DB"></Header>

                <Form onClearClick={this.onClear} isListPressed={this.state.isListPressed}
                    onSaveClick={this.onList}></Form>

                <Words list={this.state.items}></Words>
            </div>
        )
    }
}

export default ListWordDB;