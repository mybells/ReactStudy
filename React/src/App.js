import React from 'react';
import UseStateDemo from './pages/HookStudy/useStateDemo'
import UseEffectDemo from './pages/HookStudy/useEffectDemo'
import UseEffectDemo2 from './pages/HookStudy/useEffectDemo2'
import SetStateDemo from './pages/ReactDemo/setStateDemo1'
import SetStateDemo2 from './pages/ReactDemo/setStateDemo2'
import SetStateDemo3 from './pages/ReactDemo/setStateDemo3'
import SetStateDemo4 from './pages/ReactDemo/setStateDemo4'
import RefDemo from './pages/ReactDemo/RefDemo'


function App() {
  return (
    <div>
      <h2>Hook Demo</h2>
      <div>>**************useState是同步的**************</div>
      <UseStateDemo />
      <div>>**************useEffect中执行顺序**************</div>
      <UseEffectDemo2 />
      <div>>**************useEffect中return的用法**************</div>
      <UseEffectDemo />

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
    </div>
  );
}

export default App;
