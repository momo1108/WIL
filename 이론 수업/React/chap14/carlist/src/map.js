import React, {Component} from 'react'

class Input extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.props.ourInputFunction} />
      </div>
    );
  }
}

class Parent extends Component {
  constructor() {
    super();
    this.handleInputFunction = this.handleInputFunction.bind(this);
  }
  state = {
    name: '',
  };
  handleInputFunction(e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <Input ourInputFunction={this.handleInputFunction} />
      </div>
    );
  }
}

export default Parent;