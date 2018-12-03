import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // setup state
    this.state = {
      scores: [
        {
          id: 1,
          name: "ahjuma",
          score: 1001
        },
        {
          id: 2,
          name: "jeffles",
          score: 20
        },
        {
          id: 3,
          name: "stinkface",
          score: 500
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {" "}
        {/* here is another comment */}
        <h1>Scoreboard App</h1>
        <div className="score-container">{this._scoresAsCards()}</div>
      </div>
    );
  }
  _scoresAsCards() {
    const cards = this.state.scores.map(score => {
      return (
        <div key={score.id}>
          <h2>
            Name: {score.name} \\ Score: {score.score}
          </h2>
          <button onClick={() => this._incrementScoreById(score.id)}>+</button>
        </div>
      );
    });
    return cards;
  }

  // _incrementScoreById(id) {
  //   // find the player in this.statscores
  //   // increment their score
  //   const newScores = this.state.scores.map(jeff => {
  //     if (jeff.id !== id) {
  //       return jeff;
  //     } else {
  //       return {
  //         id: jeff.id,
  //         name: jeff.name,
  //         score: jeff.score + 1
  //       };
  //     }
  //   });
  //   // and call this.setState
  //   this.setState({
  //     scores: newScores
  //   });
  // }

  // // version 2: .map, iusing a shorthand to copy values out of the original
  // _incrementScoreById(id) {
  //   // find the player in this.state.scores
  //   // increment their scores
  //   const newScores = this.state.scores.map(bruce => {
  //     if (bruce.id !== id) {
  //       return bruce;
  //     } else {
  //       return {
  //         ...bruce,
  //         score: bruce.score + 1
  //       };
  //     }
  //   });
  //   // and call this.setState
  //   this.setState({
  //     scores: newScores
  //   });
  // }

  // version 3: .map, object copy
  _incrementScoreById(id) {
    const newScores = this.state.scores.map(bob => {
      return bob.id !== id ? bob : { ...bob, score: bob.score + 1 };
    });
    // and call this.setState
    this.setState({
      scores: newScores
    });
  }
}

export default App;
