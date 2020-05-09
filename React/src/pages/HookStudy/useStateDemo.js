import React, { useState, useEffect } from 'react'

export default function useEffectDemo() {
  const [count, setcount] = useState(0)
  const [obj, setobj] = useState({ a: 1 })

  useEffect((b) => {
    //obj改变后，后执行
    return (a)=>{
      // console.log(a)//undefined
      //obj改变后，先执行
    }
  })

  const change=()=>{
    // console.log(this)//undefined
    console.log('执行前：',obj);
    setobj((val)=>{
      // console.log(val===obj);//true,val是obj的引用
      let cloneObj={...obj};
      // console.log(cloneObj===obj);//false
      cloneObj.a++;
      return cloneObj
    })
    console.log('执行后：',obj);
    /* 执行前后相同，证明和setState一样是异步的 */
  }
  return (
    <div>
      {count}
      <button onClick={() => {change()}}>加一</button>
    </div>
  )
}

/* useState和setState一样是异步的 */
/* useState没回调函数 */

