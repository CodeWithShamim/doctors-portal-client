import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import Reviews from "./components/Reviews/Reviews";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Footer from "./components/Shared/Footer";
import Page_404 from "./components/Shared/Page_404";
import Appoinments from "./components/Appoinments/Appoinments";

function App() {
  return (
    <div className="App">
      <Header> </Header>{" "}
      <Routes>
        <Route path="/" element={<Home> </Home>}></Route>
        <Route Route path="/about" element={<About> </About>}></Route>
        <Route
          path="/appoinment"
          element={<Appoinments> </Appoinments>}
        ></Route>
        <Route path="/reviews" element={<Reviews> </Reviews>}></Route>
        <Route
          Route
          path="/contactUs"
          element={<ContactUs> </ContactUs>}
        ></Route>
        <Route path="/login" element={<Login> </Login>}></Route>
        <Route path="/signup" element={<Signup> </Signup>}></Route>
        <Route Route path="*" element={<Page_404> </Page_404>}></Route>
      </Routes>{" "}
      <Footer> </Footer>{" "}
    </div>
  );
}

export default App;
