import React, { Component } from 'react'

export default class setStateDemo extends Component {
  state = { count: 0 }

  btnClick = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    //更新后count不是3而是1，因为setState浅合并所有数据后，统一执行。
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