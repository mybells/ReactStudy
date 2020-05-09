import React, { Component } from 'react'

export default class setStateDemo extends Component {
  state = { count: 1 }

  btnClick = () => {
    let count=this.state.count+1;
    this.setState({ count: count });
    console.log(this.state.count)//还是上一次的值，因为setState执行是异步的

    // this.setState({ count: count },function(state){
    //   console.log(state)//undefined
    //   console.log(this.state.count)//改变后的值
    // });

    // this.setState((state, props) => {
    //   return {counter: state.counter + props.step};
    // });
  }

  render() {
    return (
      <div>
        <div> {this.state.count} </div>
        <button onClick={this.btnClick}>加一</button>
      </div>
    )
  }
}
/* setState是异步执行的 */