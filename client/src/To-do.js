import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './To-doCSS.css'

const ProfilePage = () => {
  const [userId, setUserId] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          console.log('Token not found');
          return;
        }

        const response = await axios.get('http://localhost:8080/api/todo', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserId(response.data.UserId);
        console.log('User ID:', response.data.UserId);

        const tasksResponse = await axios.get('http://localhost:8080/api/todos', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTasks(tasksResponse.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const addTask = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token || !userId) {
        return;
      }

      await axios.post(
        'http://localhost:8080/api/todo',
        { ThingToDo: newTask },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const response = await axios.get('http://localhost:8080/api/todos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      setTasks(response.data);
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTaskStatus = async (taskId, status) => {
    try {
      const token = localStorage.getItem('token');

      if (!token || !userId) {
        return;
      }

      await axios.put(
        `http://localhost:8080/api/todo/${taskId}`,
        { Status: status, ThingToDo: tasks.find(task => task.Id === taskId).ThingToDo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const response = await axios.get('http://localhost:8080/api/todos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(response.data);
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem('token');

      if (!token || !userId) {
        return;
      }

      await axios.delete(`http://localhost:8080/api/todo/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await axios.get('http://localhost:8080/api/todos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(response.data);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const editTask = async (taskId, newTask) => {
    try {
      const token = localStorage.getItem('token');

      if (!token || !userId) {
        return;
      }

      await axios.put(
        `http://localhost:8080/api/todo/${taskId}`,
        { ThingToDo: newTask, Status: tasks.find(task => task.Id === taskId).Status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const response = await axios.get('http://localhost:8080/api/todos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(response.data);
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  return (
    <div>
      <h1>Todo list</h1>
      {userId !== null ? (
        <div>
          <ul>
            {tasks.map(task => (
              <li key={task.Id}>
                <span
                  style={{
                    textDecoration: task.Status ? 'line-through' : 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => updateTaskStatus(task.Id, task.Status ? 0 : 1)}
                >
                  {task.ThingToDo}
                </span>
                <button onClick={() => deleteTask(task.Id)}>Delete</button>
                <button onClick={() => {
                  const newTaskText = prompt('Enter new task text:', task.ThingToDo);
                  if (newTaskText !== null) {
                    editTask(task.Id, newTaskText);
                  }
                }}>
                  Edit
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ProfilePage;
