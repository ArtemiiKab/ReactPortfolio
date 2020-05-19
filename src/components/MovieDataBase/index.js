import React, { useState } from 'react';
import Search from "../Search";
import Results from "../Results";
import Popup from "../Popup";
import s from "./MovieDataBase.module.css";
import axios from "axios";

function MovieDataBase() {
    const [state, setState] = useState(
        {
            s: "",
            results: [],
            selected: {},
        }
    );

    const apiUrl = "http://www.omdbapi.com/?apikey=e0f78248";

    const search = (e) => {
        if (e.key === "Enter") {
            axios(apiUrl + "&s=" + state.s).then(({ data }) => {
                let results = data.Search;

                setState(prevState => {
                    return { ...prevState, results: results }
                })
            })
        }
    }

    const handleInput = (e) => {
        let s = e.target.value;
        setState(prevState => {
            return { ...prevState, s: s }
        })
    }


    const openPopup = id => {
        axios(apiUrl + "&i=" + id).then(({ data }) => {
            let result = data;
            console.log(data)
            setState(prevState => {
                return { ...prevState, selected: result }
            })
        })
    }

    const closePopup = () => {
        setState(prevState => {
            return { ...prevState, selected: {} }
        })
    }
    return (
        <div className={s.movieDBMain}>
            <div className={s.movieHeader}>
                <Search handleInput={handleInput} search={search} className={s.searchTag} />
            </div>
            <div className={s.movieChoiceMain}>
                {(state.results !== undefined) ? <Results className={s.results} results={state.results} openPopup={openPopup} /> : <div>Sorry, there are no movies with such names in our database</div>}
                {(typeof state.selected.Title == "string") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
            </div>
        </div>
    );
}

export default MovieDataBase;