const defaultState={
  inputValue:'Write Something',
  list:[
    'one',
    'two',
    'three'
  ]
};
export default (state=defaultState,action)=>{
  //Reducer里只能接受state,不能改变state
  if(action.type==='changeInput'){
    let newState=JSON.parse(JSON.stringify(state))
    newState.inputValue=action.value;
    return newState;
  }
  if(action.type==='addItem'){
    let newState=JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue=''
    return newState;
  }
  if(action.type==='deleteItem'){
    let newState=JSON.parse(JSON.stringify(state));
    newState.list.splice(newState.index,1);
    return newState;
  }
  return state;
}