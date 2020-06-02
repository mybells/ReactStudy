import React, { Component } from 'react';
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Child msg="&lt;3" msg2={'<3'} msg3='<3'> Parent </Child>
      </div>
    );
  }
}

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
export default Parent;
