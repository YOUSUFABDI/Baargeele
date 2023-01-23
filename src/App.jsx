import "./style.css";
import Home from "./pages/home";
import Download from "./pages/download";
import Contact from "./pages/contact";
import SignIn from "./pages/signIn";
import Register from "./pages/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/download" element={<Download />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/sign" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
