import {useState} from "react";
import Header from './components/Header';
import TodoList from "./components/TodoList"

const todoList = [
  {
    id: 1,
    text: "React ile todoList uygulaması",
    completed: false,
  },
  {
    id: new Date().getTime(),
    text: "uuid kullanımı",
    completed: false,
  },
];

function App() {
  const [todos, setTodos]=useState(todoList)

  return (
    <div className="container">
      <Header setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;


