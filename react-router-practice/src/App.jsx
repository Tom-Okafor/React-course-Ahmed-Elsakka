import AppRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return <BrowserRouter>{AppRoutes()}</BrowserRouter>;
}

export default App;
