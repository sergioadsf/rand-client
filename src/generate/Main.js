import React, { Component } from 'react';
import { Grid, Row, Col, ControlLabel, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

import App from '../App.js';
import Words from '../component/Words.js';
import Header from '../component/Header.js';

import '../App.css';

const initialState = {
    value: 0, items: [],
    isSaving: false, isGenerate: false
};

export default class Main extends Component {

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
        this.handleChange = this.handleChange.bind(this);
        this.onClear = this.onClear.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onGenerate = this.onGenerate.bind(this);
    }

    onGenerate = () => {
        this.setState({ isGenerate: true });

        fetch(App.JAVA_APP + "words/generateSentence?numberOfWords=" + this.state.value)
            .then(response => response.json())
            .then(items => {
                this.setState({ items: items, isGenerate: false })
            });
    }

    onSave() {
        this.setState({ isSaving: true });

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({ items: this.state.items }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        fetch(App.NODE_APP + "words/", requestInfo)
            .then(response => response.json())
            .then(items => {
                this.resetState();
            });
    }

    onClear() {
        this.resetState();
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    getValidationState() {
        //const length = this.state.value.length;
        //if (this.state.value === 0) return;
        //if (length === 0 || length > 2) return 'error';
        //if (length === 0) return 'error';
        //else return 'success';
        return 'success';
    }

    render() {
        return (
            <div >
             <Header title="MAIN"></Header>   
                <Grid>
                    <FormGroup title="t"
                        controlId="formBasicText"
                        validationState={this.getValidationState()}>
                        <Row className="show-grid">
                            <Col md={5}><ControlLabel>How many words would you like to generate? </ControlLabel></Col>
                            <Col md={2}><FormControl type="number"
                                value={this.state.value}
                                onChange={this.handleChange} />
                            </Col>
                            <Col md={1}>
                                <FormControl.Feedback />
                            </Col>
                            <Col md={4}>
                                <button disabled={this.state.isGenerate === true || this.state.value === '' || this.state.value <= 0}
                                    className="btn btn-primary" onClick={this.onGenerate}>{this.state.items.length === 0 ? "Generate" : "Re-Generate"} </button>
                                &nbsp;
                                <button onClick={this.onSave} className="btn btn-success" disabled={this.state.items.length === 0 || this.state.isSaving === true}>Save</button>
                                &nbsp;
                                <button onClick={this.onClear} className="btn btn-warning">Clear</button>
                            </Col>
                        </Row>
                        <HelpBlock>Size maximum 2.</HelpBlock>
                    </FormGroup>
                </Grid>

                <Words list={this.state.items}></Words>
            </div >
        )
    }
}
