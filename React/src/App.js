import React from 'react';
import UseStateDemo from './pages/HookStudy/useStateDemo'
import UseEffectDemo from './pages/HookStudy/useEffectDemo'
import UseEffectDemo2 from './pages/HookStudy/useEffectDemo2'
import UseEffectDemo3 from './pages/HookStudy/useEffectDemo3'
import GetOldValue from './pages/HookStudy/getOldValue'
import SetStateDemo from './pages/ReactDemo/setStateDemo1'
import SetStateDemo2 from './pages/ReactDemo/setStateDemo2'
import SetStateDemo3 from './pages/ReactDemo/setStateDemo3'
import SetStateDemo4 from './pages/ReactDemo/setStateDemo4'
import RefDemo from './pages/ReactDemo/RefDemo'
import Parent from './pages/ReactDemo/父子传值/特殊字符转义'
import ChangeProps from './pages/ReactDemo/父子传值/子组件改变props导致父组件行为'
import ArrayDemo from './pages/ReactDemo/数组render渲染'
import Lifecycle from './pages/ReactDemo/lifecycle'
import ComponentDemo from './pages/ReactDemo/生命周期误区/ComponentDemo'

function App() {
  return (
    <div>
      <h2>Hook Demo</h2>
      <div>**************useState是同步的**************</div>
      <UseStateDemo />
      <div>**************useEffect中return的用法**************</div>
      <UseEffectDemo />
      <div>**************useEffect中执行顺序**************</div>
      <UseEffectDemo2 />
      <div>**************忽略依赖列表中 state，但这通常会引起 Bug**************</div>
      <UseEffectDemo3 />
      <div>**************为什么我会在我的函数中看到陈旧的 props 和 state ？**************</div>
      <GetOldValue />
      <div>************** 16.3版本生命周期前后对比 **************</div>
      <Lifecycle />
      <div>************** 只要父级重新渲染，getDerivedStateFromProps 和 componentWillReceiveProps 都会重新调用，不管 props 有没有变化。所以，在这两个方法内直接将 props 赋值到 state 是不安全的。 **************</div>
      <ComponentDemo />


      <h2>React Demo</h2>
      <div>**************setState将count设为原始值还是执行了render方法*************</div>
      <SetStateDemo />
      <div>**************setState将count.a改变不会执行render方法。因为用的是PureComponent，导致shouldComponentUpdate认为state的count是一个对象，就不执行render了*************</div>
      <SetStateDemo2 />
      <div>**************setState执行是异步的***************</div>
      <SetStateDemo3 />
      <div>**************setState执行合并***************</div>
      <SetStateDemo4 />
      <div>**************Ref**************</div>
      <RefDemo />
      <div>**************父子传值（转义字符测试）**************</div>
      <Parent />
      <div>**************父子传值（数组render渲染）**************</div>
      <ArrayDemo />
      <div>**************父子传值（子组件改变props导致父组件行为）**************</div>
      <ChangeProps />
    </div>
  );
}

export default App;
