import React, { Component } from 'react'

export default class setStateDemo extends Component {
  state = { count: 1 }

  btnClick = () => {
    this.setState({ count: 1 });
  }

  render() {
    return (
      <div>
        <div> {this.state.count} </div>
        <button onClick={this.btnClick}>重置</button>
      </div>
    )
  }
}
/* setState将count设为原始值还是执行了render方法 */