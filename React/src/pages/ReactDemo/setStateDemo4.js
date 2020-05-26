import React, { Component } from "react"

export default class setStateDemo extends Component {
  state = { count: 0 }

  btnClick = () => {
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    //更新后count不是3而是1，因为setState浅合并所有数据后，统一执行。

    // 这样写是符合预期的
    // this.setState((state) => {
    //   // 重要：在更新的时候读取 `state`，而不是 `this.state`。
    //   return { count: state.count + 1 }
    // })
    // this.setState((state) => {
    //   // 重要：在更新的时候读取 `state`，而不是 `this.state`。
    //   return { count: state.count + 1 }
    // })
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
