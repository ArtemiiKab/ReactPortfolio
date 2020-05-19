import React, { useState } from 'react';
import NavPanel from "./components/NavPanel";
import MovieDataBase from "./components/MovieDataBase";



import axios from "axios";


function App() {
  const [state, setState] = useState(
    {
      mainWidget: <MovieDataBase />,

    }
  );


  const handleNavItem = (Widget) => {

    setState(prevState => {
      return { ...prevState, mainWidget: Widget }
    })
  }

  return (
    <div className="App">
      <main>
        <NavPanel handleNavItem={handleNavItem} />
        <div className="content">{state.mainWidget}</div>
      </main>
    </div>
  );
}

export default App;
