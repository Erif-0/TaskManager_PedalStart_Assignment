// TaskList.js
import  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    axios.get('https://taskmanager-backend-juk6.onrender.com/api/tasks')
    .then(response => {
        console.log('API response:', response.data); 
        if (Array.isArray(response.data)) {
          setTasks(response.data);
        } else {
          console.error('API response is not an array:', response.data);
        }
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="card">
      <h1>Task List</h1>
      
      {Array.isArray(tasks) && tasks.length > 0 ? (
        <ul className="list">
          {tasks.map(task => (
            <li  key={task.id}>
              <Link className='name' to={`/task/${task.id}`}>{task.title}</Link>
              <button onClick={() => handleEdit(task.id)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
              
            </li>
            
          ))}
          <button onClick={handleAddTask}>➕</button>
        </ul>
      ) : (
        <>
            <p>No tasks available.</p>
            <button onClick={handleAddTask}>Add New Task</button>
        </>
      )}
    </div>
  );

  function handleDelete(id) {
    axios.delete(`https://taskmanager-backend-juk6.onrender.com/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(error => console.error(error));
  }

  function handleEdit (id)  {
    navigate(`/edit-task/${id}`);
  }

  function handleAddTask  ()  {
    navigate('/add-task');
  }
}

export default TaskList;
