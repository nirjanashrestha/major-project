import logo from "./logo.svg";
import "./App.css";
import TestingItem from "./TestingItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { List, Typography } from "antd";
import TodoList from "./component/TodoList";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
export default function App() {
  const [taskName, setTaskName] = useState("");
  const [edit, setEdit] = useState(false);
  //   const [myTodoList,setTodoList]=useState([
  //         {
  //             id:1,
  //             todo:"major task 1",
  //             complete:false,
  //         }, {
  //             id:2,
  //             todo:"major task 2",
  //             complete:true,
  //         }, {
  //             id:3,
  //             todo:"major task 3",
  //             complete:false,
  //         },
  //     ]);
  const [myTodoList, setTodoList] = useState([]);
  useEffect(() => {
    //   console.log("hello");
    //   return () => {
    //     console.log("gone");
    //   };
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoList(data.todos));
  }, []);

  //   fetch("https://dummyjson.com/todos")
  //     .then((res) => console.log("success"))
  //     .catch((e) => console.log("failure"))
  //     .finally((res) => console.log("everything done"));

  const changeFunc = (id) => {
    let UpdateArray = myTodoList.map((item) => {
      if (item.id == id) {
        return { ...item, complete: !item.complete };
      } else {
        return item;
      }
    });
    console.log(UpdateArray);
    setTodoList(UpdateArray);
  };

  //   myTodoList[index].completed= true;

  //     console.log(myTodoList);
  //     setTodoList([
  //         ...myTodoList,{
  //         ...myTodoList[index],
  //         completed:true,
  //     },
  // ]);

  const deletItems = (id) => {
    const filteredItems = myTodoList.filter((item) => {
      return item.id != id;
    });
    setTodoList(filteredItems);
  };
  const updateTaskList = () => {
    setTodoList([
      ...myTodoList,
      {
        id: myTodoList.length + 1,
        todo: taskName,
        complete: false,
      },
    ]);
    setTaskName("");
  };

  const editItems = (item) => {
    setEdit(true);
    setTaskName(item.todo);
    const filteredItems = myTodoList.filter((taskItem) => {
      return taskItem.id != item.id;
    });
    filteredItems.push({
      todo: taskName,
      complete: false,
      id: item.id,
    });
    setEdit(false);
    setTodoList(filteredItems);
  };

  return (
    <div className="all_wrapper">
      <h1>Hello this is your task list</h1>
      <div>
        <h1>hello world</h1>
        <ul className={"todo_wrapper"}>
          {myTodoList.map((item, index) => {
            return (
              <li
                key={item.id}
                className={`single_task ${
                  item.complete ? `complete` : `uncomplete`
                }`}
              >
                {item.todo}
                <div className="action">
                  <h2>this is my project</h2>
                  <h1>i love my country</h1>
                  <input
                    type="checkbox"
                    onChange={(e) => changeFunc(item.id)}
                  />
                  <DeleteOutlined onClick={() => deletItems(item.id)} />
                  <EditOutlined onClick={() => editItems(item)} />
                </div>
              </li>
            );
          })}
        </ul>
        <div className="input_wrapper">
          <div className="creating">
            <input
              type="text"
              onChange={(e) => setTaskName(e.target.value)}
              value={taskName}
            />
            <button
              className="btn btn-primary"
              disabled={taskName == "" ? true : false}
              onClick={() => updateTaskList()}
            >
              {edit ? "Edit your task" : "create new task"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
