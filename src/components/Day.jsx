import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant.jsx'
import './day.css';

export default class Day extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: null
        };

        this.getRestaurants = this.getRestaurants.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    componentDidMount() {
        // initial the state with restaurants as default
        this.getRestaurants()
        .then((res) => res.json())
        .then((jres) => {
            this.setState({ restaurants: jres.restaurants })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    getRestaurants() {
        // get the restaurants
        return(
            fetch("https://www.digitart.co.il/foodlooz/api/restaurants/read.php")
        )
    }

    handleAddClick(name) {
        let newRestaurants = this.state.restaurants.map((r,i) => {
            if (r.name === name) {
                return {"name": r.name, "count": r.count + 1}
            } else {
                return r
            }
        });

        this.setState({ restaurants: newRestaurants})
    }

    render() {
        return (
            <div className="day">
                <div className="title">
                    {this.props.title}
                </div>
                {this.state.restaurants && this.state.restaurants.map((r,i) => {
                    return(
                        <Restaurant key={i} title={r.name} count={r.count} onClick={this.handleAddClick}/>
                    )
                })}
            </div>
        );
    }
}
