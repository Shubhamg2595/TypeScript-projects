import React, { useState } from "react";

type FormElem = React.FormEvent<HTMLFormElement>;

export default function Todo() {
  const [value, setValue] = useState<string>("");

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
