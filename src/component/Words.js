import React, { Component } from 'react';

import Word from './Word.js';

class Words extends Component {

    render(props) {
        return (
            <div>
                {
                    this.props.list.map((word) =>
                          <Word param={word.word}></Word>
                          )
                }
            </div>
        )
    }
}

export default Words;