import type { Employee } from "../models/Employee";
import EmployeeCard from "../components/EmployeeCard";
import "./EmployeeListPage.css";
import { useState, useEffect } from "react";
import { deleteEmployeeById } from "../api/employeeService";
interface Props {
  employees: Employee[];
  loading: boolean;
  error: string;
}

const EmployeeList = ({ employees, loading, error }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<number | null>(null);
  const [list, setList] = useState<Employee[]>(employees);

  useEffect(() => {
    setList(employees);
  }, [employees]); // useEffect keeps them in sync

  const toggleMenu = (id: number) => {
    setIsModalOpen((prev) => (prev === id ? null : id));
  };
  if (loading) return <p>Loading employees...</p>;
  if (error) return <p>{error}</p>;

  const handleDelete = async (id: number) => {
    try {
      await deleteEmployeeById(id); //  API call
      setList(
        (
          prev // Update UI
        ) => prev.filter((emp) => emp.employeeId !== id)
      );
      setIsModalOpen(null); // Close menu
    } catch {
      alert("Failed to delete employee"); //  Error handling
    }
  };

  return (
    <div className="employee-list">
      {list.length === 0 ? (
        <p>No employees found</p>
      ) : (
        list.map((emp) => (
          <EmployeeCard
            key={emp.employeeId}
            employee={emp}
            isMenuOpen={isModalOpen === emp.employeeId}
            onToggleMenu={() => toggleMenu(emp.employeeId)}
            onDelete={() => handleDelete(emp.employeeId)}
          />
        ))
      )}
    </div>
  );
};

export default EmployeeList;
