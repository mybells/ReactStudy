/* 误解一：getDerivedStateFromProps 和 componentWillReceiveProps 只会在 props 改变 时才会调用

实际上，只要父级重新渲染，getDerivedStateFromProps 和 componentWillReceiveProps 都会重新调用，不管 props 有没有变化。所以，在这两个方法内直接将 props 赋值到 state 是不安全的。 */

import React, { Component } from 'react';

// 子组件
class PhoneInput extends Component {
  state = { phone: this.props.phone };

  handleChange = e => {
    this.setState({ phone: e.target.value });
  };

  render() {
    const { phone } = this.state;
    return <input onChange={this.handleChange} value={phone} />;
  }

  componentWillReceiveProps(nextProps) {
    // 不要这样做。
    // 这会覆盖掉之前所有的组件内 state 更新！
    this.setState({ phone: nextProps.phone });
  }
}

// 父组件
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    // 使用了 setInterval，
    // 每秒钟都会更新一下 state.count
    // 这将导致 App 每秒钟重新渲染一次
    this.interval = setInterval(
      () =>
        this.setState(prevState => ({
          count: prevState.count + 1
        })),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <p>
          Start editing to see some magic happen :)
        </p>
        <PhoneInput phone='call me!' />
        <p>
          This component will re-render every second. Each time it renders, the
          text you type will be reset. This illustrates a derived state
          anti-pattern.
        </p>
      </>
    );
  }
}