import "../App.css";
import AllCards from "./Card/AllCards";
import { createContext, useState, useEffect } from "react";
import FetchSpaceXData from "./FetchData";

const CardData = createContext();
function App() {
  const [loadState, setLoadState] = useState({
    isDataLoaded: false,
    spaceXData: null,
    message: "Loading... Please wait.",
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await FetchSpaceXData();
        setLoadState({ isDataLoaded: true, spaceXData: data, message: null });
      } catch (error) {
        console.log(error);
        setLoadState({
          isDataLoaded: false,
          spaceXData: null,
          message:
            "Sorry we could not load your resource. Please, check your connection.",
        });
      }
    })();
  }, []);

  const { isDataLoaded, spaceXData, message } = loadState;
  return (
    <>
      <h1>SpaceX Launches Tracker</h1>
      {isDataLoaded ? (
        <CardData.Provider value={spaceXData}>
          <AllCards />
        </CardData.Provider>
      ) : (
        <h2>{message}</h2>
      )}
    </>
  );
}

export default App;
export { CardData };
