import "./style.css";
import Home from "./pages/home";
import Download from "./pages/download";
import Contact from "./pages/contact";
import SignIn from "./pages/signIn";
import Register from "./pages/register";
import Profile from "./pages/profile";
import EditProfile from "./pages/editProfilePage";
import OtpPage from "./pages/otp";
import TransactionPage from "./pages/transaction";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./DataContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/download" element={<Download />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/sign" element={<SignIn />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/editprofile" element={<EditProfile />}></Route>
            <Route path="/otp" element={<OtpPage />}></Route>
            <Route path="/transaction" element={<TransactionPage />}></Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
};

export default App;
