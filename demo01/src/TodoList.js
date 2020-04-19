import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd'
import store from './store'
import {changeInputAction,addItemAction,deleteItemAction} from './store/actionCreators'

export default class TodoList extends Component {
  constructor(){
    super();
    this.state=store.getState();
    this.storeChange=this.storeChange.bind(this)
    this.clickBtn=this.clickBtn.bind(this);
    store.subscribe(this.storeChange);
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
      <div>
        <div>
          <Input onChange={this.changeInputValue} value={this.state.inputValue} placeholder={this.state.inputValue} style={{width:250}}></Input>
          <Button type="primary" onClick={this.clickBtn}>增加</Button>
        </div>
        <div>
          <List bordered dataSource={this.state.list} renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}/>
        </div>
      </div>
    )
  }
}
