import React, { Component } from 'react';

class lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    this.state = {
      count: 0
    };
  }
  static defaultProps = {
    name: 1
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps', props, state)
  //   return state;
  // }
  componentDidMount = () => {
    console.log('componentDidMount');
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState)
    return true;
  }

  /* render后钩子函数 */
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate', prevProps, prevState)
  //   return 2
  // }
  componentDidUpdate = (prevProps, prevState, snapShot) => {
    console.log('componentDidUpdate', prevProps, prevState, snapShot);
  };


  /* 不推荐使用，已过时 */
  componentWillMount = () => {
    console.log('componentWillMount');
  };
  componentWillReceiveProps = (nextProps) => {
    //初始化不执行，props更新执行。16.3后不推荐使用，已过时，使用getDerivedStateFromProps替代。
    //componentWillReceiveProps方法中第一个参数代表即将传入的新的Props
    console.log("componentWillReceiveProps");
  }
  componentWillUpdate = (nextProps, nextState) => {
    //render前执行
    console.log('componentWillUpdate');
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError')
  }
  componentDidCatch(error, info) {
    console.log('getDerivedStateFromError')
  }

  render() {
    console.log('render')
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={() => this.setState((state) => { return state.count++ })}>count++</button>
        <button onClick={() => this.forceUpdate(() => { console.log('完成forceUpdate') })}>forceUpdate</button>
      </div>
    );
  }
}

export default lifecycle;

/*
1. componentWillMount、componentWillMount、componentWillMount名字会沿用到17，之后用UNSAFE_componentWillMount、UNSAFE_ccomponentWillMount、UNSAFE_ccomponentWillMount替代。

2. React16.3版本后新增了两个getDerivedStateFromProps getDerivedStateFromProps钩子函数用来替代componentWillMount、componentWillMount、componentWillMount。
使用getDerivedStateFromProps getDerivedStateFromProps就会忽略componentWillMount、componentWillMount、componentWillMount钩子函数，并报警告。

3. 16.3版本之前生命周期：
  1 组件初始化
    constructor -> componentWillMount -> render -> componentDidMount
  2 组件更新 – props change(props发生改变)
    componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
  3 组件更新 – state change(this.setState()使state发生改变)
    shoudlComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
  4 组件更新 – 执行forceUpdate(不执行shouldComponentUpdate)
    componentWillUpdate -> render -> componentDidUpdate
  5 组件卸载或销毁
    componentWillUnmount

4. 16.3版本之后生命周期：
  1 组件初始化
    constructor -> getDerivedStateFromProps -> render -> componentDidMount
  2 组件更新 – props change/state change(props发生改变/this.setState()使state发生改变)
    getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
  3 组件强制更新 – 执行forceUpdate(不执行shouldComponentUpdate)
    getDerivedStateFromProps -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
  4 组件卸载或销毁
    componentWillUnmount
*/