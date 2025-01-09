import "../styles/GameRecords.css";
import { useContext, useEffect } from "react";
import { CardContext } from "./App";

function GameRecords() {
  const totalMatchesNeeded = 8;
  const { state, dispatch } = useContext(CardContext);

  const { currentSeconds, fastestSeconds, gameStarted, matchesMade, alert } =
    state;

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
      }, 3000);
    }
  }, [matchesMade, dispatch]);
  return (
    <section className="records">
      <div className="scores">
        <h3>Current Time: {currentSeconds}</h3>
        <h3>Fastest Time: {fastestSeconds ? fastestSeconds : "N/A"}</h3>
      </div>

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
