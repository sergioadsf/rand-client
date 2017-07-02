import React, { Component } from 'react';

class Header extends Component {

    render(props) {
        return (
            <div className="row" >
                <div className="panel panel-primary" >
                    <div className="panel-heading" >
                        <label>{this.props.title}</label>
                    </div >
                </div >
            </div >
        )
    }
}

export default Header;