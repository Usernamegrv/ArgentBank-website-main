import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Error from "./pages/error/Error.jsx";
import Login from "./pages/login/Login.jsx";
import Dashboard from "./pages/dashboard/DashBoard.jsx";
import Footer from "./layout/footer/Footer.jsx";
import "./App.css";
// import { useSelector } from "react-redux";

function App() {
  // const isAuthenticated = useSelector(
  //   (state) => state.postReducer.isAuthenticated
  // );

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
