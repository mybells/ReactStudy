import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

//input输入值不可被修改，指定为null或者为空则可以修改
// ReactDOM.render(<input value="hi" />, document.getElementById('root'));

ReactDOM.render(<TodoList />,document.getElementById('root'));