// TaskDetail.js
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get(`https://taskmanager-backend-juk6.onrender.com/api/tasks/${id}`)
      .then(response => setTask(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <div className='card'>
    <ul>
     <li><h1>{task.title}</h1></li> 
     <li> <p>{task.description}</p></li>
     <li> <p>Due Date: {task.dueDate}</p></li>
    </ul>
    </div>
  );
}

export default TaskDetail;
