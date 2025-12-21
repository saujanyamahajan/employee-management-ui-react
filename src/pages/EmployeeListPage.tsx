import { useEffect, useState } from "react";
import type { Employee } from "../models/Employee";
import { getEmployees } from "../api/employeeService";
import EmployeeCard from "../components/EmployeeCard";
import "./EmployeeListPage.css";


const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (err) {
        setError("Failed to load employees");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="employee-list">
      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        employees.map((emp) => (
          <EmployeeCard key={emp.employeeId} employee={emp} />
        ))
      )}
    </div>
  );
};

export default EmployeeList;
