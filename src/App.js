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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./components/Shared/RequireAuth";
import Dashboard from "./components/Dashboard/Dashboard";
import MyItems from "./components/Dashboard/MyItems";
import MyAppoinments from "./components/Dashboard/MyAppoinments";
import { createContext, useEffect, useState } from "react";
import MyHistory from "./components/Dashboard/MyHistory";
import Users from "./components/Dashboard/Users";
import RequireAdmin from "./components/Shared/RequireAdmin";
import AddDoctor from "./components/Dashboard/AddDoctor";
import ManageDoctors from "./components/Dashboard/ManageDoctors'";

export const ThemeContext = createContext("theme");
function App() {
  const themeToggle = JSON.parse(localStorage.getItem("theme"));
  const [theme, setTheme] = useState(themeToggle || false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="App" data-theme={theme ? "dark" : "light"}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Header> </Header>
      </ThemeContext.Provider>
      <Routes>
        <Route path="/" element={<Home> </Home>}></Route>
        <Route path="/about" element={<About> </About>}></Route>
        <Route
          path="/appoinment"
          element={
            <RequireAuth>
              <Appoinments> </Appoinments>
            </RequireAuth>
          }
        ></Route>
        <Route path="/reviews" element={<Reviews> </Reviews>}></Route>
        <Route
          Route
          path="/contactUs"
          element={<ContactUs> </ContactUs>}
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyAppoinments />}></Route>
          <Route path="myAppoinments" element={<MyAppoinments />}></Route>
          <Route path="myItems" element={<MyItems />}></Route>
          <Route path="myHistory" element={<MyHistory />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctors"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="/login" element={<Login> </Login>}></Route>
        <Route path="/signup" element={<Signup> </Signup>}></Route>
        <Route Route path="*" element={<Page_404> </Page_404>}></Route>
      </Routes>
      <Footer> </Footer> <ToastContainer />
    </div>
  );
}

export default App;
