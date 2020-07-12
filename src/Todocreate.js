

import React, { Component } from 'react';
import './index.css';
export class Todocreate extends Component {

constructor(props) {
super(props);
this.state = { newItem: "" }
}

updateNewTextValue = (event) => {
this.setState({ newItem: event.target.value});
}

createNewTodo = () => {
this.props.callback(this.state.newItem);
this.setState({ newItem: ""});
}

render = () =>
<div className="container">
<div className="row text-center offset-1">
<input className="form-control col-10" value={ this.state.newItem }
onChange={ this.updateNewTextValue } />
</div>
<div className="row d-flex justify-content-center">
<button className="btn btn-primary btn-large in"
onClick={ this.createNewTodo }>Add</button>
</div>
</div>
}