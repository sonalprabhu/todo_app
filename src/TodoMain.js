import React,{Component} from 'react';
import {Todobanner} from "./Todobanner.js";
import {Tocreatecard} from "./Tocreatecard.js";
import {Todocreate} from "./Todocreate.js";

  export default class TodoMain extends Component {

    constructor(props){
      super(props);
      this.state={
        name:"Sonal",
        itemList:[
            { action:"Learning NodeJS",done:false},
            {action:"Dancing", done: false}
        ],
        newItem:""
      }
      this.createNewTodo=this.createNewTodo.bind(this);
      this.todocards=this.todocards.bind(this);
      this.toggleTodo=this.toggleTodo.bind(this);
      this.updateNewTextValue=this.updateNewTextValue.bind(this);
     
    }
    updateNewTextValue = (event) => {
        this.setState({ newItem: event.target.value });
        }

    todocards = () => this.state.itemList.map(item =>
        <Tocreatecard key={ item.action } item={ item } callback={ this.toggleTodo } />)

    createNewTodo = (task) => {
        if(task==="")
        alert("Enter a task");
    else if(!this.state.itemList.find( item => item.action === task)){
     this.setState({
         itemList:[...this.state.itemList,{
             action:task,
             done: false,
         }]
     })
    }
    this.setState({
        newItem:""
    })
    }

    toggleTodo = (todo) => this.setState({ itemList:
        this.state.itemList.map(item => item.action === todo.action
        ? { ...item, done: !item.done } : item) });

    render =() =>
     <div>
        <div className="jumbotron">
        <div className="banner">
        <Todobanner name={ this.state.name } tasks={this.state.itemList }/> 
        </div>
        <div >
        <Todocreate callback={ this.createNewTodo }/>
          </div> 
        </div>
        <div>
        <div className="row d-flex justify-content-center">
        {this.todocards()}
        
        </div>
       </div>
        </div>
    
  }

 
/*
<div className="row">
        {this.todocards()}
        
        </div>
         <div className="row">
        <input className="form-control col-10" value={this.state.newItem} onChange={ this.updateNewTextValue }/>
        <button className="btn btn-primary mt-1 col-2"
onClick={ this.createNewTodo }>Add</button>
</div>

*/

