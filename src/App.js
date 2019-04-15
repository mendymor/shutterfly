import React, { Component } from 'react';
import Day from './components/Day.jsx'
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days: []
        };

        this.getDays = this.getDays.bind(this);
    }

    componentDidMount() {
        // initial the state with all days as default
        this.getDays()
        .then((res) => res.json())
        .then((jres) => {
            this.setState({ days: jres.days })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    getDays() {
        // get the days of week
        return(
            fetch("https://www.digitart.co.il/foodlooz/api/days/read.php")
        )
    }

    render() {
        debugger;
        return (
            <div className="app">
                <div className="content">
                    {this.state.days && this.state.days.map((day,i) => {
                        return(
                            <Day key={i} title={day.name} restaurants={this.state.restaurants}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}
