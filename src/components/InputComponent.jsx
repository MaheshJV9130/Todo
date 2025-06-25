import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const InputComponent = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState({
    todo: "",
    isCompleted: false,
  });
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todo = localStorage.getItem("todos");

    if (todo) {
      setTodos(JSON.parse(todo));
    }
   
  }, []);

  const handleInput = (event) => {
    setInputValue({
      todo: event.target.value,
      isCompleted: false,
    });
  };

  const handleAdd = () => {
    setTodos([{ ...inputValue, id: uuidv4() }, ...todos]);
    localStorage.setItem(
      "todos",
      JSON.stringify([{ ...inputValue, id: uuidv4() }, ...todos])
    );
    setInputValue({
      todo: "",
      isCompleted: false,
    });
  };
  const handleCheckbox = (id) => {
    const checkedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(checkedTodo);

    localStorage.setItem("todos", JSON.stringify(checkedTodo));
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure to delete ?")) {
      let newTodos = todos.filter((i) => i.id !== id);
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };
  const handleEdit = (id) => {
    let editTodo = todos.filter((items) => items.id === id)[0];
    setTodos(todos.filter((i) => i.id !== id));
    setInputValue({
      todo: editTodo.todo,
      isCompleted: editTodo.isCompleted,
    });
    
  };
  const noSearch = <div>
      <img src="/no-search.gif" alt="no-serach" />
      <p className="text-center">No todo found</p>
    </div>
  return (
    <>
      <section className="w-full max-w-md mx-auto my-5 flex justify-center items-center px-2">
        <span className="h-full w-full flex justify-center items-center gap-2 my-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add Task..."
            value={inputValue.todo}
            className="h-11 w-full md:w-[70%] border-2 border-[#000] p-2 rounded-xl outline-0 text-black text-xs md:text-base"
            onChange={handleInput}
            maxLength={100}
          />
          <button
            onClick={handleAdd}
            className="bg-white hover:bg-violet-100 rounded-xl cursor-pointer m-2 p-2 border-2 border-black transition-colors"
          >
            <img src="/add.png" alt="add" width={20} />
          </button>
        </span>
      </section>
      <section>
        <ol className="w-full max-w-md mx-auto m-2 p-1 overflow-y-auto overflow-x-hidden text-red-500 max-h-[60vh]">
        {todos.length === 0 && noSearch }
          {todos.map((todo, idx) => (
            <>
             
              <li
                className="flex justify-between items-center border-b-2 border-black m-2 p-1"
                key={todo.id}
              >
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  className="cursor-pointer w-5 h-4 accent-violet-500 rounded border-2 border-black focus:ring-2 focus:ring-violet-300 transition-all duration-150"
                  onChange={() => handleCheckbox(todo.id)}
                />
                <span
                  className={`flex-1 mx-2 text-wrap text-xs md:text-base ${
                    todo.isCompleted ? "line-through" : ""
                  }`}
                >
                  {todo.todo === "" ? "Untitled" : todo.todo}
                </span>
                <span className="flex gap-1">
                  <button className="m-1 p-2 bg-white hover:bg-violet-100 rounded-xl cursor-pointer border-2 border-black transition-colors">
                    <img
                      src="/edit.gif"
                      alt="edit"
                      width={20}
                      onClick={() => handleEdit(todo.id)}
                    />
                  </button>
                  <button
                    className="m-1 p-2 bg-white hover:bg-red-100 rounded-xl cursor-pointer border-2 border-black transition-colors"
                    onClick={() => handleDelete(todo.id)}
                  >
                    <img src="/bin.gif" alt="bin" width={20} />
                  </button>
                </span>
              </li>
            </>
          ))}
        </ol>
      </section>
    </>
  );
};

export default InputComponent;
