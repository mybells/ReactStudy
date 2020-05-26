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
import Parent from './pages/ReactDemo/父子传值/Parent'

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
      <div>**************父子传值（数组和转义测试）**************</div>
      <Parent />
    </div>
  );
}

export default App;
