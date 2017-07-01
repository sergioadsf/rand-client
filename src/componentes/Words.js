import React, { Component } from 'react';

class Words extends Component {

    render(props) {
        return (
            <div>
                <ul>
                    {
                        this.props.list.map((word) => <label>{word.word}&nbsp;&nbsp;</label>)
                    }
                </ul>
            </div>
        )
    }
}

export default Words;