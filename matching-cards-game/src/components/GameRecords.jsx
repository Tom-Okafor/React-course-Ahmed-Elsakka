import "../styles/GameRecords.css";
import { useContext, useEffect } from "react";
import { CardContext } from "./App";

function GameRecords() {
  const { state, dispatch } = useContext(CardContext);

  const {
    currentSeconds,
    fastestSeconds,
    gameStarted,
    matchesMade,
    alert,
    totalMatchesNeeded,
  } = state;

  useEffect(() => {
    if (gameStarted) {
      setTimeout(() => {
        dispatch({ type: "Game Started" });
      }, 1000);
    } else {
      dispatch({ type: "Game Reset" });
    }
  }, [gameStarted, currentSeconds, dispatch]);

  useEffect(() => {
    if (matchesMade === totalMatchesNeeded) {
      new Audio("assets/matched.mp3").play();
      dispatch({ type: "Matches Complete" });
      setTimeout(() => {
        dispatch({ type: "Reshuffle Card" });
        dispatch({ type: "Clear Matched Cards" });
        dispatch({ type: "Clear Matches Made" });
      }, 3000);
    }
  }, [matchesMade, totalMatchesNeeded, dispatch]);
  return (
    <section className="records">
      <div className="scores">
        <h3>Current Time: {currentSeconds}</h3>
        <h3>Fastest Time: {fastestSeconds ? fastestSeconds : "N/A"}</h3>
      </div>

      <form action="">
        <label htmlFor="level" id="label">
          Please, select preferred level:
        </label>
        <select
          name="level"
          id="level"
          role="listbox"
          aria-labelledby="label"
          onChange={(event) => {
            dispatch({ type: "Start New Level", payload: event.target.value });
            dispatch({ type: "Update Total Matches Needed" });
          }}
        >
          <option value="easy" role="option">
            easy
          </option>
          <option value="intermediate" role="option">
            intermediate
          </option>
          <option value="hard" role="option">
            hard
          </option>
        </select>
      </form>

      <div className="buttons">
        <button
          onClick={() => {
            dispatch({ type: "Start Game" });
          }}
        >
          start
        </button>
        <button
          onClick={() => {
            dispatch({ type: "Restart Game" });
            dispatch({ type: "Clear Matched Cards" });
            dispatch({ type: "Reshuffle Card" });
          }}
        >
          restart
        </button>
      </div>

      <h4>{alert}</h4>
    </section>
  );
}

export default GameRecords;
