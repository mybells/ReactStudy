import React, { Component } from 'react';
import Child from './Child'
import Child2 from './Child2'
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
        <Child2></Child2>
      </div>
    );
  }
}

export default Parent;
