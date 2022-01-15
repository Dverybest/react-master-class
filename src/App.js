import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Restaurants from "./pages/ restaurants";
import Home from "./pages/home";
import Resigter from "./pages/resigter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/restaurants"} element={<Restaurants/>}/>
        <Route path={'/register'} element={<Resigter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
