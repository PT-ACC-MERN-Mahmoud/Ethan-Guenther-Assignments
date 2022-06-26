import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Todo from './components/Todo';
function App() {

  const [addToDo, setAddToDo] = useState("");

  const [toDoList, setToDoList] = useState([]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(addToDo.length===0)
    {
      return null;
    }

    const toDoDictionary = {
      text: addToDo,
      complete: false
    };

    setToDoList([toDoDictionary, ...toDoList]);
    setAddToDo("");
  };

  const handleDelete = (delIndex) => {
    const filterList = toDoList.filter((toDo, index) =>{
      return index != delIndex;
    })

    setToDoList(filterList);
  };

  const handleCompletion = (toggleIndex) => {
    const toggleToDoList = toDoList.map((toDo, index) => {

      if(toggleIndex === index)
      {
          //mutattes the complete value in the dictionary
          toDo.complete = !toDo.complete;
          //use to avoid mutation
          // const updateComplete = {...toDo, complete: !toDo.complete};

      }
      return toDo;

    });

    setToDoList(toggleToDoList);
  }

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(e) => {
        handleSubmit(e);
      }}>
          <input onChange={(e) => {setAddToDo(e.target.value);}} 
          type={"text"}
          value={addToDo}/>
          <div>
            <button>Add</button>
          </div>
      </form>

      {
        toDoList.map((toDo, index) => {
        //used if only on app.js, check components for refactored code
        // const listComplete = (index) => {
        //   if(toDo.complete === true)
        //   return "decorate";
        // }

          return (
            <Todo toDo={toDo} handleCompletion={handleCompletion} index={index}
              key={index} handleDelete={handleDelete}/>
            //used if only coding in app.js, check components for refactored code
            // <div key={index}>
            //   <span className={`${listComplete(index)}`}>{toDo.text}</span>
            //   <input onChange={(e) => {
            //     handleCompletion(index);
            //   }} checked={toDo.complete} type={"checkbox"}/>
            //   <button onClick={(e) => {handleDelete(index);}}
            //   style={{marginLeft: "10px"}}>Delete</button>
            // </div>
          )

        })
      }
    </div>
  );
}

export default App;
