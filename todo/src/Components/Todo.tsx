import React, { useState, Fragment } from "react";

// ? difference between typs and interfaces

// * types simply refers to another type that exists
type FormElem = React.FormEvent<HTMLFormElement>;

// * with interfaces we can create new types and also perforn inheritance

interface ITodo {
  task: string;
  completed: boolean;
}

// inheritance with TS interfaces

interface ITodo2 extends ITodo {
  tags: string[];
}

export default function Todo() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  function handleSubmit(e: FormElem) {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }

  const addTodo = (task: string): void => {
    const updatedTodos: ITodo[] = [...todos, { task, completed: false }];
    setTodos(updatedTodos);
  };

  const completeTodo = (index: number) => {
    const toBeUpdatedTodos: ITodo[] = [...todos];
    toBeUpdatedTodos[index].completed = !toBeUpdatedTodos[index].completed;

    setTodos(toBeUpdatedTodos);
  };

  console.log("Todos", todos);

  return (
    <>
      <h3> Todo List </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add Todo </button>
      </form>
      <section>
        {todos &&
          todos.length > 0 &&
          todos.map((todo: ITodo, index: number) => {
            return (
              <>
                <Fragment key={index}>
                  <div>
                    {todo.task}
                    <button onClick={() => completeTodo(index)}> {todo.completed ? <i>completed</i> : <p> Not completed </p>} </button>
                  </div>
                  
                </Fragment>
              </>
            );
          })}
      </section>
    </>
  );
}
