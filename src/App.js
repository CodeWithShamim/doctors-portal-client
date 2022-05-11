import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import Reviews from "./components/Reviews/Reviews";
import Appoinment from "./components/Appoinment/Appoinment";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appoinment" element={<Appoinment></Appoinment>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
