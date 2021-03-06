import React, { Component } from 'react'
import TodoListUI from './TodoListUI'
import store from './store'
import {changeInputAction,addItemAction,deleteItemAction,getTodoList} from './store/actionCreators'

export default class TodoList extends Component {
  constructor(){
    super();
    this.state=store.getState();
    this.storeChange=this.storeChange.bind(this)
    this.clickBtn=this.clickBtn.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }
  componentDidMount(){
    const action=getTodoList();
    store.dispatch(action);
  }

  changeInputValue=(e)=>{
    const action=changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange(){
    this.setState(store.getState())
  }
  clickBtn(){
    const action=addItemAction();
    store.dispatch(action);
  }
  deleteItem(index){
    const action=deleteItemAction(index);
    store.dispatch(action);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}
      />
    )
  }
}
