import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form.jsx'
import './restaurant.css';

export default class Restaurant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showForm: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleClick() {
        this.setState({ showForm: !this.state.showForm });
    }

    handleAdd() {
        this.setState({ showForm: false });
        this.props.onClick(this.props.title);
    }

    render() {
        return (
            <div className="rest">
                <div className="restaurant">
                    <div className="rtitle">
                        {this.props.title}
                    </div>
                    <div className="register">
                        <div className="count">
                            {this.props.count}
                        </div>
                        <div className="add" onClick={this.handleClick}>
                            {this.state.showForm ? '-' : '+'}
                        </div>
                    </div>
                </div>
                {this.state.showForm &&
                    <Form onClick={this.handleAdd}/>
                }
            </div>
        );
    }
}
