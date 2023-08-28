import { useState } from 'react';
import './App.css';
import InputControl from './Components/InputTODO'
import List from './Components/ListTODO';

function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
      console.log(listTodo);
  }
  const deleteListItem = (index)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(index,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <InputControl addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <List key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}


export default App;
