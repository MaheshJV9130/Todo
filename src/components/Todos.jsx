import React, { useState } from "react";
const Todos = ({ todo = "Untitled", index }) => {
  const [isCompleted, setisCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [editTodo, setEditTodo] = useState(todo);

  let todoTitle = (
    <h2
      className={`font-sans text-gray-900 text-center text-xl w-[80%] ${
        isCompleted ? "line-through text-gray-400" : ""
      }`}
    >
      {editTodo}
    </h2>
  );
  const handleCheckBox = (event) => {
    setisCompleted(event.target.checked);
  };
  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };
  const handleChange = (event) => {
    setEditTodo((prevTodo) => (prevTodo = event.target.value));
  };
  const handleDelete = () => {
    console.log(index);
    setIsDelete(true);
  };

  if (isEditing) {
    todoTitle = (
      <input
        type="text"
        className="font-sans text-gray-900 text-center text-xl outline-0 "
        value={editTodo}
        onChange={handleChange}
      />
    );
  }

  return (
    <li
      className={`flex justify-between items-center border-2 border-l-0 border-t-0 border-r-0 border-b-black m-2 p-1 ${
        isDelete ? "hidden" : ""
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer w-5 h-4 accent-violet-500 rounded border-2 border-black focus:ring-2 focus:ring-violet-300 transition-all duration-150"
        onChange={handleCheckBox}
      />
      {todoTitle}
      <span>
        <button className="m-2 p-2 bg-[#b4b4b4] rounded-xl cursor-pointer border-2 border-black" onClick={handleEdit}>
          {isEditing ? <img src="/save.gif" alt="save" width={20}/> : <img src="/edit.gif" alt="edit" width={20}/>}
        </button>
        <button className="m-2 p-2 bg-[#b4b4b4] rounded-xl cursor-pointer border-2  border-black" onClick={handleDelete}>
          <img src="/bin.gif" alt="bin" width={20}/>
        </button>
      </span>
    </li>
  );
};

export default Todos;
