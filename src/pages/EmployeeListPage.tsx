import type { Employee } from "../models/Employee";
import EmployeeCard from "../components/EmployeeCard";
import "./EmployeeListPage.css";
import { useState } from "react";

interface Props {
  employees: Employee[];
  loading: boolean;
  error: string;
}

const EmployeeList = ({ employees, loading, error }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<number | null>(null);
  const toggleMenu = (id: number) => {
    setIsModalOpen((prev) => (prev === id ? null : id));
  };
  if (loading) return <p>Loading employees...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="employee-list">
      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        employees.map((emp) => (
          <EmployeeCard
            key={emp.employeeId}
            employee={emp}
            isMenuOpen={isModalOpen === emp.employeeId}
            onToggleMenu={() => toggleMenu(emp.employeeId)}
          />
        ))
      )}
    </div>
  );
};

export default EmployeeList;
