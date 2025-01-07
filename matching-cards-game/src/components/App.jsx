import "../styles/App.css";
import AllCards from "./AllCards";
import GameRecords from "./GameRecords";

function App() {
  return (
    <>
      <h1>Matching cards game</h1>
      <GameRecords />
      <AllCards />
    </>
  );
}

export default App;
