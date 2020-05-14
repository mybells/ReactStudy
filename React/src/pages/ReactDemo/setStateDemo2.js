import React, { PureComponent } from 'react'

export default class setStateDemo extends PureComponent {
  state = { count: { a: 1 } }

  btnClick = () => {
    let count = this.state.count.a + 1; //Do not mutate state directly.
    //++this.state.count.a; //Do not mutate state directly.
    this.setState({ count: count });
  }

  render() {
    return (
      <div>
        <div> {this.state.count.a} </div>
        <button onClick={this.btnClick}>加一</button>
      </div>
    )
  }
}
/* setState将count.a改变不会执行render方法。因为用的是PureComponent，导致shouldComponentUpdate认为state的count是一个对象，就不执行render了 */