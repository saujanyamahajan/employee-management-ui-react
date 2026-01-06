// import { Routes, Route, Navigate } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage";
import "./App.css";
import HomePageNavBar from "./components/HomePageNavBar";
function App() {
  return (
    <>
      <HomePageNavBar />
      <EmployeesPage />
    </>
  );
}

export default App;
