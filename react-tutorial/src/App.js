import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") return;
    setToDos(currentArray => [toDo, ...currentArray]); //...은 배열 속 요소들을 풀어주는 역할
    setTodo("");
    console.log(toDos);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button >Add To Do</button>
      </form>
    </div>
  );
}

export default App;
