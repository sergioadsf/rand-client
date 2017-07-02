import { Component } from 'react';

class IForm extends Component {

    initialState = {
        items: [], isListPressed: false, item: ""
    };

    constructor() {
        super();
        this.initBind();
        this.initState(this.initialState);
    }

    initState() {
        this.state = this.initialState;
    }

    resetState() {
        this.setState(this.initialState);
    }

    initBind() {
        this.onClearClick = this.onClearClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    onSaveClick() {
        alert("Implement");
    }

    onClearClick() {
        this.resetState();
    }
}

export default IForm;