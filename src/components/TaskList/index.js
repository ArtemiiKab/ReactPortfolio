import React, { useContext } from "react";
import { TaskListContext as TaskListContext } from "../TaskListContextProvider";
import Task from "../Task";
import TaskForm from "../TaskForm";
import s from "./TaskList.module.css"

function TaskList() {

    const { tasks } = useContext(TaskListContext)


    return (
        <div className={s.taskListMain}>

            <div className={s.taskListList}>
                <TaskForm />
                <ul className={s.taskListUl}>{tasks.map(task => {
                    return <Task task={task} key={task.id} />
                })}</ul>
            </div>
        </div>

    )
}




export default TaskList