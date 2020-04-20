import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd'

const TodoListUI=(props) => {
  let {changeInputValue,clickBtn,deleteItem,list,inputValue}=props;
  return (
    <div>
      <div>
        <Input onChange={changeInputValue} value={inputValue} placeholder={inputValue} style={{width:250}}></Input>
        <Button type="primary" onClick={clickBtn}>增加</Button>
      </div>
      <div>
        <List bordered dataSource={list} renderItem={(item,index)=>(<List.Item onClick={()=>{deleteItem(index)}}>{item}</List.Item>)}/>
      </div>
    </div>
  )
}
export default TodoListUI;
