import React, { useState } from "react";

// ? difference between typs and interfaces

// * types simply refers to another type that exists
type FormElem = React.FormEvent<HTMLFormElement>;

// * with interfaces we can create new types and also perforn inheritance

interface ITodo {
  text: string;
  complete: boolean;
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
    setValue("");
  }

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
    </>
  );
}
