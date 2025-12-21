import { Routes, Route, Navigate } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage";
import "./App.css";


function App() {
  return (
    <>
    <div className="navBar">
      <h2>Employee Management Portal</h2>
      <h4 className="subHeading">Manage your team members</h4>
      </div>
      <EmployeesPage />
    </>
  );
}

export default App;


