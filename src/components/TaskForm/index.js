import React, { useContext, useState, useEffect } from "react";
import s from "./TaskForm.module.css";
import { TaskListContext as TaskListContext } from "../TaskListContextProvider";

function TaskForm() {
    const { addTask, editItem, editTask } = useContext(TaskListContext);

    const [title, setTitle] = useState('');



    useEffect(() => {
        if (editItem !== null) {
            setTitle(editItem.title);

        } else {
            setTitle('')

        }
    }, [editItem])

    const handleSubmit = e => {
        e.preventDefault();
        if (editItem === null) {
            addTask(title);
            setTitle('')
        } else {
            editTask(title, editItem.id)
        }

    }

    const handleInputChange = e => {
        setTitle(e.target.value);
    }

    return (
        <form className={s.inputForm} onSubmit={handleSubmit}>
            <input value={title} maxlength="25" className={s.input} type="text" placeholder="My new task is..." required onChange={handleInputChange}></input>
            <div className={s.btnSubmitContainer}>
                <button className={s.btnSubmit}>{(editItem) ? "Edit" : "Add"}</button>
            </div>
        </form>
    )
}

export default TaskForm;