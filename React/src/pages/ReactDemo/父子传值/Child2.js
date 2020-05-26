import React, { Component } from 'react';
/* 数组渲染 */
class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      [<li key="A">First item</li>,
      <li key="B">Second item</li>,
      <li key="C">Third item</li>]
    );
  }
}

export default Child2;
