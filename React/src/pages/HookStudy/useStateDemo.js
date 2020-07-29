import React, { useState } from 'react'

export default function useEffectDemo() {
  const [obj, setobj] = useState({ a: 1 })

  const change = () => {
    // console.log(this)//undefined
    console.log('执行前：', obj);
    setobj((val) => {
      // console.log(val===obj);//true,val是obj的引用,直接改变obj值不会更新视图(val.a++;return val)
      let cloneObj = { ...obj };
      // console.log(cloneObj===obj);//false
      cloneObj.a++;
      return cloneObj
    })
    console.log('执行后：', obj);
    /* 执行前后相同，证明和setState一样是异步的 */
  }
  return (
    <div>
      {JSON.stringify(obj)}
      <button onClick={() => { change() }}>改变obj</button>
    </div>
  )
}

/* useState和setState一样是异步的 */
/* useState没回调函数 */

