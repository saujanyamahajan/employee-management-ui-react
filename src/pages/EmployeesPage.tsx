import { useEffect, useState } from "react";
import type { Employee } from "../models/Employee";
import { getEmployees } from "../api/employeeService";
import EmployeeList from "./EmployeeListPage";
import "./EmployeePage.css";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to load employees");
        }
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  return (
    <div className="employees-page">
      <div className="header">
        <div>
          <h1>Employees</h1>
        </div>
        <div className="sub-heading">
          <p>{employees.length} total employees</p>
          <button className="add-btn">+ Add Employee</button>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search employees by name, email, department, or role..."
          />
        </div>
        <EmployeeList employees={employees} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default EmployeesPage;
