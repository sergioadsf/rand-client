import React from 'react';

import App from '../App.js';
import Word from '../component/Word.js';
import Header from '../component/Header.js';
import IForm from '../component/IForm.js';
import Form from '../component/Form.js';

class Sentence extends IForm {

    onSaveClick() {
        this.setState({ isListPressed: true })

        fetch(App.NODE_APP + "words")
            .then(response => response.json())
            .then(item => {
                this.setState({ item: item.words, isListPressed: false })
            });
    }

    render() {
        return (
            <div>
                <Header title="SENTENCE"></Header>

                <Form onClearClick={this.onClearClick} isListPressed={this.state.isListPressed}
                    onSaveClick={this.onSaveClick} txtSaveButton="Get Phrase"></Form>
                    
                <Word param={this.state.item}></Word>
            </div >
        )
    }
}

export default Sentence;