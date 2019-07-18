import React, {Component} from 'react';
import './HelloWorld.css';
// Component도 React에서 받아오기 때문에 앞에 안써줘도 되나?
class HelloWorld extends Component {
    render(){
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

export default HelloWorld;