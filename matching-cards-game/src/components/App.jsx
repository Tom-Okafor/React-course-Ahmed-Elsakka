import "../styles/App.css";
import AllCards from "./AllCards";
import GameRecords from "./GameRecords";
import { createContext, useReducer, useState } from "react";
import { initialCardState } from "../constants";
import { CardReducer } from "./CardReducer";

const CardContext = createContext();
function App() {
  const [state, dispatch] = useReducer(CardReducer, initialCardState);
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDarkModePreferred, setDisplaySettings] = useState(
    JSON.parse(localStorage.isDarkModePreferred || "false") ||
      mediaQuery.matches
  );
  function changeDisplayMode() {
    setDisplaySettings((prev) => {
      localStorage.isDarkModePreferred = JSON.stringify(!prev);
      return !prev;
    });
  }

  return (
    <div className={isDarkModePreferred === true ? "dark" : ""}>
      <h1>Matching pairs game</h1>
      <img
        src="/assets/mode.svg"
        alt=""
        role="button"
        aria-roledescription="This button toggles between light and dark mode"
        tabIndex={1}
        className="toggle"
        onClick={changeDisplayMode}
      />
      <CardContext.Provider value={{ state, dispatch }}>
        <GameRecords />
        <AllCards />
      </CardContext.Provider>
    </div>
  );
}

export default App;
export { CardContext };
