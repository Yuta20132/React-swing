import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DrfApiFetch = () => {

    const [tasks, setTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState([])
    const[id, setId] = useState(1)
    const [editedTask, setEditedTask] = useState({id:'',title:''})

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tasks/').then(res => {setTasks(res.data)})
    },[])

    const getTask = () => {
        axios.get(`http://127.0.0.1:8000/api/tasks/${id}/`).then(res => {setSelectedTask(res.data)
    })
    }

    const deleteTask = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`)
        .then(res => {setTasks(tasks.filter(task => task.id !== id));
        setSelectedTask([])})
    }

    const newTask = (task) => {

        const data = {
            title: task.title,
        }
        axios.post(`http://127.0.0.1:8000/api/tasks/`, data, {
            headers: {'Content-Type': 'application/json'}
        }).then(res => setTasks([...tasks, res.data])
    )
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setEditedTask({...editedTask,[name]:value})
    };

    return (
    <div>
        <ul>
            {
                tasks.map(task => <li key={task.id}>{task.title} {task.id}
                <button onClick={()=>deleteTask(task.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
                </li>)
            }
        </ul>

        Set id <br/>
        <input type='text' value={id} onChange={evt=>{setId(evt.target.value)}}/>
        <br/>
        <button type='button' onClick={()=>getTask()}>Get task</button>


        <h3>{selectedTask.title} {selectedTask.id}</h3>

        <input type="text" name="title" 
        value= {editedTask.title}
        onChange={(e) => handleInputChange(e)}
        placeholder="New task ?" required/>

        <button onClick={()=>newTask(editedTask)}>Create</button>
    </div>
)
}

export default DrfApiFetch
