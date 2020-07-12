import React,{Component} from 'react';


export default class Greeting extends Component{
   
    render()
    {
        let msg;
        if(this.props.isLoggedIn)
        msg="You are logged in"
        else
        msg="You are logged out"
        return(
          <h1>{msg}</h1>
        );
    }
}