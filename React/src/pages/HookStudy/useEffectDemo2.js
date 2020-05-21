import React, { useState, useEffect } from 'react'

export default function useEffectDemo() {
  const [count, setcount] = useState(0)
  console.log('useEffect 外面之前', count)
  useEffect(() => {
    console.log('useEffect内', count)
    return () => {
      console.log('useEffect的return执行了:', count)
    }
  })
  console.log('useEffect 外面之后', count)
  useEffect(() => {
    /* 没有依赖任何变量，不写第二个参数还是默认传入了所有props，state，改变触发 */
    console.log(1)
    return () => {
      console.log(2)
    }
  })
  return (
    <div>
      {count}
      <button onClick={() => setcount(val => ++val)}>加一</button>
    </div>
  )
}
/* 先执行这个函数组件，输出同步数据。然后利用闭包执行return，这个是上次执行结果。最后执行useEffect函数 */

/*
初始：
useEffect 外面之前 0
useEffect 外面之后 0
useEffect内 0

第一次点击：
useEffect 外面之前 1
useEffect 外面之后 1
useEffect的return执行了: 0
useEffect内 1

第二次点击：
useEffect 外面之前 2
useEffect 外面之后 2
useEffect的return执行了: 1
useEffect内 2
*/