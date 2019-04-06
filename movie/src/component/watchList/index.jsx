import React from "react";
import Cardwatchlist from "../Cardwatchlist";
import "./style.css";

const watch = ({ click , watchList}) => (
    <section id="movie-list" className ="watch-list">
        <div className="main-watchList">
            <h1 className="h1-watchList">watchList</h1>
            <div className="list-watchList">
                {watchList.map((list, index)=>(
                    <Cardwatchlist key={index} click={click} id={index} data={list}></Cardwatchlist>
                ))}
            </div>
        </div>  
    </section>
);
export default watch;