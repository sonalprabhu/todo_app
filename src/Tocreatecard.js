

import React, { Component } from 'react';
export class Tocreatecard extends Component {
render = () =>
{
return(
<div>
    {
    !this.props.item.done
&&
<div className="col-6">
<div className="card text-center">
  <div className="card-body">
  <h5 className="card-title">
  <input type="button" className="btn btn-primary" 
  onClick={ () => this.props.callback(this.props.item) } value="Done"
/>
  </h5>
    <p className="card-text">
    { this.props.item.action}</p>

  </div>
</div>
</div>
    }
</div>
);
}

}
/*
<button type="button" className="close" data-toggle="collapse" data-target="#demo" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
<div className="col-6">
<div className="card text-center">
  <div className="card-body">
  <h5 className="card-title">
  <input type="checkbox" checked={ this.props.item.done }
  onChange={ () => this.props.callback(this.props.item) }
  />

  </h5>
    <p className="card-text">{ this.props.item.action}</p>

  </div>
</div>
</div>
*/
