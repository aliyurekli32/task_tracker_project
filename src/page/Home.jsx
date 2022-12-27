import React,{useState,useEffect} from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button"
import axios from "axios";

const Home = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [text,setText]=useState("Show Task Bar")
  const [task,setTask]= useState([]);
  const url="https://63878fa6e399d2e47302d6ed.mockapi.io/Task_tracker"

  const toggle=()=>{
    setIsOpen(!isOpen);
    const buttonText=isOpen ? "Show Task Bar" : "Hide Task Bar"
    setText(buttonText);
  }

  // CRUD  -READ--
  const getTask=async()=>{
    const {data}=await axios(url)
    setTask(data);
    console.log(data)
  }

  useEffect(() => {
    getTask()
  },[])

  return (
    <div className="mt-4 d-flex justify-content-center flex-column ">
      <Button 
      onClick={()=>{toggle()}}
      variant="info">{text}</Button>
      { isOpen && <AddTask getTask={getTask}/>}     
      <TaskList task={task} getTask={getTask}/>
    </div>
  );
};

export default Home;
