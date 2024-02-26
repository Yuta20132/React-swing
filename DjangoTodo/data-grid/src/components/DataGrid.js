import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid'

const Todo = () => {

    const columns = [
        {field: 'title', headerName: 'Title'},
        {field: 'description', headerName: 'Description'},
        {field: 'created_at', headerName: 'Created'},
        {field: 'updated_at', headerName: 'Updated'},
    ]

    const [todos, setTodos] = useState([])

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/todo/todo_info/")
        .then((res) => setTodos(res.data))
    },[])

    console.log(todos)

    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
            rows={todos}
            columns={columns}
            getRowId={(row) =>  row.title}
        />
        </div>
    )
}

export default Todo