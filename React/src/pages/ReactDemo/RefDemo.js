import React, { Component } from 'react'

export default class setStateDemo extends Component {
  init = (ref) => {
    console.log(ref)
  }

  render() {
    return (
      <div>
        <button ref={(ref) => this.init(ref)}>Ref</button>
      </div>
    )
  }
}
/* 只在ref有值的情况下执行回调函数，初始不会调用 */