import React, { useState, type FormEvent } from "react";

interface Todo {
  task: string;
  completed: boolean;
  id: number;
}
const Todo = () => {
  const [todos, setTodos] = useState<Array<Todo>>([
    { id: 1, task: "default Task", completed: false },
  ]);

  const [task, setTask] = useState<string>("");

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      task,
      completed: false,
    };
    setTodos((pre) => [...pre, newTodo]);
    setTask("");
  };

  const changeStatus = (id: number) => {
    const copyTodo = [...todos];
    const result = copyTodo.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(result);
  };

  const deleteTodo = (id: number) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
  };

  return (
    <React.Fragment>
      <section className="w-full h-screen flex justify-center items-center bg-amber-600 text-black space-y-10 ">
        <div className="flex flex-col space-x-3 space-y-5  p-10">
          <form className="" onSubmit={formSubmit}>
            <input
              className="w-75 p-3 border border-red-500"
              type="text"
              aria-label="task"
              placeholder="Enter task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit" className="px-3 py-1 text-sm text-indigo">
              Add
            </button>
          </form>
          <div>
            <ul>
              {todos.map((todo) => {
                return (
                  <li
                    key={todo.id}
                    className="flex justify-between p-4 bg-slate-300 rounded-2xl my-2 w-88"
                  >
                    <div className="space-x-4 flex">
                      <div className="inline">
                        <input
                          aria-label="check"
                          data-testId="check"
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => changeStatus(todo.id)}
                        />
                      </div>
                      <p className="text-base inline">{todo.task}</p>
                    </div>
                    <button
                      type="button"
                      className="px-2 py-1 text-sm bg-red-400"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Todo;
