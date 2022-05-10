import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
