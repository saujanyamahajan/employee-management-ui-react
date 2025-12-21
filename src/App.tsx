import { Routes, Route, Navigate } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage";

function App() {
  return (
    <>
      <h2>Employee Management Portal</h2>
      <h4>Manage your team members</h4>
      <EmployeesPage />
    </>
  );
}

export default App;


