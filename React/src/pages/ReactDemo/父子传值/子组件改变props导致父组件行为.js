import React, { Component } from 'react';

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:{count:1}
    };

  };
  cb=(dd)=>{
    console.log(dd,this.state.list)//234 {count: 2}
  }
  render(){
    return (
      <div>
        {this.state.list.count}
        <button onClick={() => { this.setState(val=>{
          // console.log(val===this.state);//true
          let temp={...val};
          temp.list.count++;
          return temp;
        }) }}>父组件中改变父count</button>
        <Child list={this.state.list} callback={this.cb}></Child>
      </div>
    )
  }

}

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:props.list
    };
  };
  render(){
    return (
      <div>
        {this.state.list.count}
        <button onClick={() => { this.setState(val=>{
          let temp={...val};
          temp.list.count++;
          return temp;
        });this.props.callback(234);console.log("子组件会更新,父组件不会更新，但是父组件中state.list.count变了"); }}>子组件中改变state中count</button>
        <button onClick={() => { this.props.list.count++;console.log("父子组件不会更新,但是父组件中state.list.count变了");this.props.callback(234) }}>子组件中改变props中count</button>
      </div>
    )
  }
}

export default Parent;

/*
1. 传到子组件的值是引用。直接改变的话，值会变，但是父组件不会重新渲染。所以不要直接改变props。
2. 如果父组件传递给子组件的props改变了，子组件会执行render，但是不执行constructor。所以不要直接将props赋值给state，否则父组件中传给子组件的值改变后，子组件不会改变，但会执行render。
*/