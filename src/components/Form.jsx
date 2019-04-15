import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
    }


    handleAdd() {
        this.props.onClick();
    }

    render() {
        return (
            <div className="form">
                <input type="text" name="name" placeHolder="Name"/>
                <input type="text" name="email" placeHolder="Email"/>
                <div className="submit" onClick={this.handleAdd}>
                Submit
                </div>
            </div>
        );
    }
}
