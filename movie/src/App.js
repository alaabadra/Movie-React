import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./component/Navbar";
import WatchList from "./component/watchList"

class App extends Component {
  state = {
    watchList: [
      {
        name: "CAPTAIN MARVEL",
        img:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
        date: "4April,2019",
        overview:
          " The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
        status: false
      },
      {
        Name: "CAPTAIN MARVEL",
        img:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
        date: "4April,2019",
        overview:
          " The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
        status: true                         
      }
    ],
    searchResult: null,
    MovieToAdd: { display: "none" }
  };

  handleAddToWatchList = e => {
    e.preventDefault();
    const date = e.target[0].value;
    const id = e.target[1].id;
    const { title: name, overview, poster_path } = this.state.searchResult[id];
    this.setState({
      MovieToAdd: { display: "none" },
      watchList: this.state.watchList.concat([
        {
          name,
          overview,
          img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`,
          date
        }
      ])
    });
  };

  handleWatchlistDone = e => {
    const id = e.target.id;
    this.setState(prevState => {
      const cloneState = { ...prevState };
      cloneState.watchList[id].status = true;
      return cloneState;
    });
  };

  render() {
    return (
      <BrowserRouter>
      <Nav />
      <Switch>
        <Route
        path={"/movie-list"}
        component={() => (
          <WatchList
          click={this.handleWatchlistDone}
          watchList={this.state.watchList}
          />
        )}
       />
       
      </Switch>
      </BrowserRouter>


    );
  }
}

export default App;
