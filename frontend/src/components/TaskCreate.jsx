// TaskForm.js
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function TaskCreate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`https://taskmanager-backend-juk6.onrender.com/${id}`)
        .then(response => {
          const { title, description, dueDate } = response.data;
          setTitle(title);
          setDescription(description);
          setDueDate(dueDate);
        })
        .catch(error => console.error(error));
    }
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    const task = { title, description, dueDate };

    if (id) {
      axios.put(`https://taskmanager-backend-juk6.onrender.com/api/tasks/${id}`, task)
        .then(() => navigate('/'))
        .catch(error => console.error(error));
    } else {
      axios.post('https://taskmanager-backend-juk6.onrender.com/api/tasks', task)
        .then(() => navigate('/'))
        .catch(error => console.error(error));
    }
  }

  return (
    <form onSubmit={handleSubmit} className='card'>
      <h1>{id ? 'Edit Task' : 'Add Task'}</h1>
     <ul> 
     <li>  <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label></li> 
      <li>  <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </label></li> 
      <li>   <label>
        Due Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </label></li> 
      <li>  <button type="submit">Save</button></li> 
      </ul>
    </form>
  );
}

export default TaskCreate;
