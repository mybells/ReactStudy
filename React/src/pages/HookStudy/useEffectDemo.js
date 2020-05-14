import React, { useState, useEffect } from 'react'

function Index() {
  useEffect(() => {
    console.log('Index页面')
    return () => {
      console.log('Index的return执行了')
    }
  })
  return <h4>Index页面</h4>;
}

function List() {
  useEffect(() => {
    console.log('List页面')
    return () => {
      console.log('List的return执行了')
    }
  })
  return <h4>List页面</h4>;
}

export default function useEffectDemo() {
  const [count, setcount] = useState(0)
  const [obj, setobj] = useState({ a: 1 })

  useEffect(() => {
    console.log('count数量：', count)
    //setobj(obj => { let temp = { ...obj }; temp.a++; return temp });//会导致无线更新. 要修改它, 把 [count] 设为第二个参数或者去除setobj在useEffect中
    return () => {
      console.log('count的return执行了')
    }
  })

  return (
    <div>
      {count}
      <button onClick={() => setcount(count => ++count)}>加一</button>
      {/* {JSON.stringify(obj)} */}
      <div>
        {count % 2 ? <Index /> : <List />}
      </div>
    </div>
  )
}

/*
初始：
List页面
count数量： 0

第1次点击：
List的return执行了
Index页面
count的return执行了
count数量： 1

第2次点击：
Index的return执行了
List页面
count的return执行了
count数量： 2

第3次点击：
List的return执行了
Index页面
count的return执行了
count数量： 3
*/


/* 如果useEffect没有第二个参数，相当于传入一个全部状态的数组，只要state改变就会执行return中的函数 */
/* 如果useEffect第二个参数为空数组，state改变不会会执行return中的函数，组件销毁时会执行return中的函数 */
/* 如果useEffect第二个参数为不为空数组，数组中的状态改变会执行return中的函数，其他状态改变不会执行return中的函数，组件销毁时会执行return中的函数 */
/* 更新后，如果是引用没变，即使值改变了也不会触发useEffect*/
/* 更新后，如果是引用改变，即使值没变了也会触发useEffect*/
/* 更新后，先查找第二个参数数组里面值，如果没传默认传入全部state。如果有先执行return里面的函数，再执行useEffect外部函数*/