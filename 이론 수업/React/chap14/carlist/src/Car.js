import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Car.css';

class Car extends Component {
    render(){
        return (
                <div>
                    <tr key={this.props.carinfo.carNumber}>
                            <td>{this.props.carinfo.carNumber}</td>
                            <td>{this.props.carinfo.owner}</td>
                            <td>{this.props.carinfo.model}</td>
                            <td>{this.props.carinfo.company}</td>
                            <td>{this.props.carinfo.numOfAccident}</td>
                            <td>{this.props.carinfo.numOfOwnerChange}</td>
                        </tr>
                </div>
        )
    }
}

export default Car;
