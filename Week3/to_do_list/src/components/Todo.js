const Todo = (props) => {

    const {toDo, handleCompletion, index, handleDelete} = props;

    const listComplete = (index) => {
        if(toDo.complete === true)
        return "decorate";
      }
    return (
        <div key={index}>
              <span className={`${listComplete(index)}`}>{toDo.text}</span>
              <input onChange={(e) => {
                handleCompletion(index);
              }} checked={toDo.complete} type={"checkbox"}/>
              <button onClick={(e) => {handleDelete(index);}}
              style={{marginLeft: "10px"}}>Delete</button>
            </div>
    ) ;
}

export default Todo;