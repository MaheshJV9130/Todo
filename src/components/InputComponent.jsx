import React, { useState } from "react";
import Todos from "./Todos";
const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (input) => {
    setInputValue(input.target.value);
  };

  const handleAdd = () => {
    setTodos((prevTodos) => [...prevTodos, { inputValue }]);
    setInputValue("");
  };
  return (
    <>
      <section className="w-[90%] h-19 mx-auto my-5 flex justify-center items-center">
        <span className="h-full w-full flex justify-center items-center gap-2 my-2">
          <input
            type="text"
            placeholder="Add Task..."
            value={inputValue}
            className="h-11 w-[70%] border-2 border-[#000] p-2 rounded-xl outline-0 text-black"
            onChange={handleInput}
          />
          <button onClick={handleAdd} className="bg-[#b4b4b4] rounded-xl cursor-pointer m-2 p-2 border-2 border-black">
            <img src="/add.png" alt="add" width={20}/>
          </button>
        </span>
      </section>
      <section>
        <ol className="w-full m-2 p-1 overflow-y-auto overflow-x-hidden">
          {todos.map((todo, idx) => (
            <Todos
              key={idx}
              index={idx}
              todo={todo.inputValue === "" ? "Untitled" : todo.inputValue}
            />
          ))}
          {console.log(todos)}
        </ol>
      </section>
    </>
  );
};

export default InputComponent;
