import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div data-testid="to-do-list" className="todo-app"  >
      <TodoList />
    </div>
  );
}

export default App;