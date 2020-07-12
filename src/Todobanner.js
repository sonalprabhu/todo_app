import React, { Component } from 'react';
export class Todobanner extends Component {

render = () =>
<h4 className="text-white text-center p-2 banner">
{ this.props.name }'s To Do List
({ this.props.tasks.filter(t => !t.done).length } items to do)
</h4>

}