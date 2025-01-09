import "../styles/App.css";
import AllCards from "./AllCards";
import GameRecords from "./GameRecords";
import { createContext, useReducer } from "react";
import { initialCardState } from "../constants";
import { CardReducer } from "./CardReducer";

const CardContext = createContext();
function App() {
  const [state, dispatch] = useReducer(CardReducer, initialCardState);
  return (
    <>
      <h1>Matching pairs game</h1>

      <CardContext.Provider value={{ state, dispatch }}>
        <GameRecords />
        <AllCards />
      </CardContext.Provider>
    </>
  );
}

export default App;
export { CardContext };
