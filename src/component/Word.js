import React, { Component } from 'react';

class Word extends Component {

    render(props) {
        return (
            <label>{this.props.param}&nbsp;&nbsp;</label>
        )
    }
}

export default Word;