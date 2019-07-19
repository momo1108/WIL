import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Car.css';

class Car extends Component {
    render() {
        return (
                <tr key={this.props.carinfo.model}>
                    <td>{this.props.carinfo.model}</td>
                    <td>{this.props.carinfo.brand}</td>
                    <td>{this.props.carinfo.price}</td>
                    <td>{this.props.carinfo.mileage}</td>
                    <td>{this.props.carinfo.fuel}</td>
                    <td>{this.props.carinfo.output}</td>
                </tr>
        )
    }
}

export default Car;
