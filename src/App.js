import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./views/pages/About/About";
import AddEvent from "./views/pages/AddEvent/AddEvent";
import Login from "./views/pages/auth/Login/Login";
import RequireAuth from "./views/pages/auth/RequireAuth";
import Signup from "./views/pages/auth/Signup/Signup";
import Blog from "./views/pages/Blog/Blog";
import Footer from "./views/pages/common/Footer/Footer";
import Header from "./views/pages/common/Header/Header";
import Donation from "./views/pages/Donation/Donation";
import Events from "./views/pages/Events/Events";
import Home from "./views/pages/Home/Home";
import PageNot from "./views/pages/PageNot/PageNot";
import VolunteerRegisterList from "./views/pages/VolunteerRegisterList/VolunteerRegisterList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/donation"
          element={
            <RequireAuth>
              <Donation />
            </RequireAuth>
          }
        ></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/addEvent" element={<AddEvent />}></Route>
        <Route path="/volunteer" element={<VolunteerRegisterList />}></Route>

        <Route path="*" element={<PageNot />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
