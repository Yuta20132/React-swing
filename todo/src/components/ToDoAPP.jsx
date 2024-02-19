import React, {useState} from "react";
import 'bulma/css/bulma.css';

import { InputToDo, Filter, ToDo } from "./index.jsx";

export const ToDoApp = () => {
    //ランダムなキーを取得
    const getkey = () => {
        Math.random().toString(32).substring(2);
    };

    //stateを作成
    const [todos, setTodos ] = useState([]);
    const [filter, setFilter] = useState("ALL");

    //入力値をtodo配列に設定
    const handleAdd = (text) => {
        setTodos([...todos, {key: getkey(), text,done:false}]);
    };

    //フィルターの切り替え
    const handleFilterChange = (value) => {
        setFilter(value);
    };

    //フィルターに応じてToDoを表示
    const displayTodos = todos.filter(todo => {
        if (filter === "ALL") return true;
        if (filter === "TODO") return !todo.done;
        if (filter === "DONE") return todo.done;
    });

    // チェックボックス
    const handleCheck = checked => {
        //チェックがついたToDoの真偽値を変更
        const newToDos = todos.map(todo=> {
            if (todo.key === checked.key){
                todo.done = !todo.done;
            }
            return todo;
        });

        setTodos(newToDos);
    };
    return (
        <div className="panel is-warning">
            <div className="panel-heading">
                ToDo
            </div>
            <InputToDo onAdd={handleAdd}/>
            <Filter 
                onChange={handleFilterChange}
                value = {filter}
            />
            {displayTodos.map(todo => (
                <ToDo 
                    key = {todo.key}
                    todo = {todo}
                    onCheck={handleCheck}
                />
            ))}
            <div className="panel-block">
                {displayTodos.length} todos
            </div>

        </div>
    )
}
export default ToDoApp;

