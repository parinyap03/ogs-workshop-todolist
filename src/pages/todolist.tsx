import React, { FC, useState } from "react";

export default function ToDoList() {
  const [name, setName] = useState("");
  const [list_task, setListTask] = useState<string[]>([]);
  const Add = () => {
    setListTask([...list_task, name]);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const remove = (index: number) => {
    list_task.splice(index, 1);
    setListTask([...list_task]);
  };

  const edit = (index: number, newtask: string) => {
    const updatedList = [...list_task];
    updatedList[index] = newtask;
    setListTask(updatedList);
  };

  return (
    <>
      <div className="navbar bg-info">
        <div className="flex-1">
          <a className="text-left text-2xl text-base-100 ml-2 font-bold">
            To Do List
          </a>
        </div>
      </div>
      <div className="justify-center items-center p-5 border-opacity-50">
        <div className="card card-side bg-base-100 shadow-xl p-5 rounded-lg flex flex-col">
          <div className="flex items-center mb-2">
            <div className="avatar mr-2">
              <div className="w-12 rounded-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="Avatar"
                />
              </div>
            </div>
            <input
              onChange={handleOnChange}
              type="text"
              className="border border-gray-400 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Add a new task..."
            />
          </div>
          <button
            onClick={Add}
            className="bg-blue-500 text-white px-4 py-2 rounded self-end w-24"
          >
            Add
          </button>
        </div>
      </div>

      <div>
        <h1 className=" p-5 text-left text-2xl font-bold">Post List</h1>
      </div>

      {list_task.length === 0 && <p>No Post List</p>}
      {list_task.map((item, index: number) => {
        return (
          <ToDoListItem item={item} index={index} remove={remove} edit={edit} />
        );
      })}
    </>
  );
}

type ListMemberItemProps = {
  item: string;
  index: number;
  remove: (index: number) => void;
  edit: (index: number, value: string) => void;
};

const ToDoListItem: FC<ListMemberItemProps> = ({
  remove,
  item,
  index,
  edit,
}) => {
  const [editing, setEditing] = useState(false);
  const [newTask, setNewTask] = useState(item);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleEdit = () => {
    setEditing(true);
  };
  const handleSave = () => {
    edit(index, newTask);
    setEditing(false);
  };

  return (
    <div className="justify-center items-center p-5 border-opacity-50">
      <div className="card card-side bg-base-100 shadow-xl p-5 rounded-lg flex flex-col">
        <div className="flex items-center mb-2">
          <div className="avatar mr-2">
            <div className="w-12 rounded-full">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Avatar"
              />
            </div>
          </div>
          {editing ? (
            <input
              type="text"
              value={newTask}
              onChange={handleOnChange}
              className="border border-gray-400 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          ) : (
            <h4 className="text-left text-2xl font-bold">{item}</h4>
          )}
        </div>
        <div className="flex justify-end">
          {editing ? (
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded self-end mr-3"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded self-end mr-3"
            >
              Edit
            </button>
          )}
          {!editing && (
            <button
              onClick={() => {
                remove(index);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded self-end"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

