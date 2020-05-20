import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
    </div>
  );
}
/* 
如果你先点击「Show alert」然后增加计数器的计数，那这个 alert 会显示在你点击『Show alert』按钮时的 count 变量。这避免了那些因为假设 props 和 state 没有改变的代码引起问题。

如果你刻意地想要从某些异步回调中读取 最新的 state，你可以用 一个 ref 来保存它，修改它，并从中读取。
*/
export default Example