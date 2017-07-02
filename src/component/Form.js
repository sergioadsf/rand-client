import React, { Component } from 'react';

class Form extends Component {

    render(props) {
        return (
            <form style={{ marginBottom: 15 + "px" }}>
                <div class="form-group">
                    <div className="row">
                        <div className="col-md-12">
                            <center>
                                <button disabled={this.props.isListPressed === true}
                                    className="btn btn-primary" onClick={this.props.onSaveClick}>{this.props.txtSaveButton ? this.props.txtSaveButton : "List All"}</button>
                                &nbsp;
                                <button onClick={this.props.onClearClick} className="btn btn-warning">Clear</button>
                            </center>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}

export default Form;