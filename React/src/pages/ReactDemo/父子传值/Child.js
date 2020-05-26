import React, { Component } from 'react';
/* 转义理解 */
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>{JSON.stringify('&lt;3')}: {this.props.msg} </div>
        <div>{'<3'}: {this.props.msg2} </div>
        <div>{'<3'} {this.props.msg3} </div>
      </div>
    );
  }
}

export default Child;
