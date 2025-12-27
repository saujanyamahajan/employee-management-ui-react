import type { Employee } from "../models/Employee";
import EmployeeCard from "../components/EmployeeCard";
import "./EmployeeListPage.css";

interface Props {
  employees: Employee[];
  loading: boolean;
  error: string;
}

const EmployeeList = ({ employees, loading, error }: Props) => {
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
