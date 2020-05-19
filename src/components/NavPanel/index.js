import React, { useState } from "react";
import s from "./NavPanel.module.css";
import MovieDataBase from "../MovieDataBase";
import TaskList from "../TaskList";
import TaskListContextProvider from "../TaskListContextProvider"



function NavPanel({ handleNavItem }) {

    return (
        <div className={s.container}>
            <div className={s.navItem} onClick={() => { handleNavItem(<MovieDataBase />) }}>MovieDB</div>
            <div className={s.navItem} onClick={() => { handleNavItem(<TaskListContextProvider><TaskList /></TaskListContextProvider>) }}>TaskManager</div>
        </div>
    )
}

export default NavPanel