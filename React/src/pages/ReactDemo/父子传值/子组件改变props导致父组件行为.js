import React, { Component } from 'react';

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:{count:1}
    };

  };
  render(){
    return (
      <div>
        {this.state.list.count}
        <Child list={this.state.list}></Child>
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
      </div>
    )
  }
}

export default Parent;

/*
1. 传到子组件的值是引用。直接改变的话，值会变，但是父组件不会重新渲染。所有不要直接改变props。
2. 如果父组件传递给子组件的props改变了，子组件会执行render，但是不执行constructor。所以不要直接将props赋值给state，否则父组件中传给子组件的值改变后，子组件不会改变，但会执行render。
*/