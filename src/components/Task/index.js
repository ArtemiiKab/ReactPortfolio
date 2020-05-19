import React, { useContext } from "react";
import s from "./Task.module.css";
import { TaskListContext as TaskListContext } from "../TaskListContextProvider";

function Task({ task }) {
    const { removeTask, findItem } = useContext(TaskListContext);



    return (
        <li className={s.taskListItem}>
            <span className={s.taskTitle}>{task.title}</span>
            <div className={s.buttons}>
                <button className={s.btnDelete} onClick={() => { removeTask(task.id) }}>Delete</button>
                <button className={s.btnEdit} onClick={() => { findItem(task.id) }}>Edit</button>
            </div>
        </li>
    )
}


export default Task