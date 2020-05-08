import React from 'react';
import UseEffectDemo from './pages/HookStudy/useEffectDemo'
import SetStateDemo from './pages/ReactDemo/setStateDemo1'
import SetStateDemo2 from './pages/ReactDemo/setStateDemo2'


function App() {
  return (
    <div>
      <h2>Hook Demo</h2>
      <UseEffectDemo />
      <h2>React Demo</h2>
      <SetStateDemo />
      {/* PureCompnent和shouldCompnentUpdate */}
      <SetStateDemo2 />
    </div>
  );
}

export default App;
