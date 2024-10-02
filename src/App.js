import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './App.css';
import Card from './Commponent/Card';
import CusstomButton from './Commponent/CusstomButton';
import Custominput from './Commponent/Custominput';
import Header from './Commponent/Header';

function App() {
  const [add, setAdd] = useState(false);
  const [Task, setTask] = useState([]);
  const [singletask, setsingletask] = useState('');
  const [singledescription, setsingledescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  const notify = (message) => {
    toast(message); 
  };

  const Addtocard = () => {
    if (isEditing) {
      const updatedTasks = Task.map((task) => 
        task.id === editTaskId ? { ...task, task: singletask, des: singledescription } : task
      );
      setTask(updatedTasks);
      setIsEditing(false);
      setEditTaskId(null);
      notify('Task updated successfully!'); 
    } else {
      const id = Task.length === 0 ? 1 : Task[Task.length - 1].id + 1;
      const taskdetail = {
        id: id,
        task: singletask,
        des: singledescription,
      };
      setTask([...Task, taskdetail]);
      notify('Task added successfully!');
    }

    setsingletask('');
    setsingledescription('');
  };

  const editTask = (task) => {
    setsingletask(task.task);
    setsingledescription(task.des);
    setIsEditing(true);
    setEditTaskId(task.id);
    setAdd(true); 
  };

  const deleteTask = (id) => {
    const updatedTasks = Task.filter(task => task.id !== id);
    setTask(updatedTasks);
    notify('Task deleted successfully!'); 
  };

  const handlecustomtask = (event) => {
    setsingletask(event.target.value);
  };
  
  const handlecustomdes = (event) => {
    setsingledescription(event.target.value);
  };

  const handleinput = () => {
    setAdd(!add);
    setIsEditing(false);
    setsingletask('');
    setsingledescription('');
  };

  return (
    <Router>
      <div className="main">
        <Header handleinput={handleinput} />
        <div className="task-manager">
          <div className="input-section">
            {add && (
              <>
                <Custominput 
                  placeholder='Enter task' 
                  name='task' 
                  change={handlecustomtask} 
                  value={singletask} 
                />
                <Custominput 
                  placeholder='Enter description' 
                  name='description' 
                  change={handlecustomdes} 
                  value={singledescription} 
                />
                <div className='btnwraper'>
                  <CusstomButton 
                    color='white' 
                    bg='#1877f2' 
                    name={isEditing ? 'Update Task' : 'Save Task'} 
                    click={Addtocard} 
                  />
                  <CusstomButton 
                    color='white' 
                    bg='red' 
                    name='Cancel' 
                    click={handleinput} 
                  />
                </div>
              </>
            )}
            {!add && (
              <CusstomButton 
                color='white' 
                bg='#1877f2' 
                name='Add Task' 
                click={handleinput} 
              />
            )}
          </div>
          <div className="card-section">
            {Task.map((task) => (
              <Card 
                key={task.id} 
                title={task.task} 
                description={task.des} 
                onDelete={() => deleteTask(task.id)} 
                onEdit={() => editTask(task)} 
              />
            ))}
          </div>
        </div>
        <ToastContainer /> 
      </div>
    </Router>
  );
}

export default App;
