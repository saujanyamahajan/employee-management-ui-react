import type { Employee } from "../models/Employee";
import "./EmployeeCard.css";
import moreIcon from "../assets/more.svg";
import EmployeeCardMenu from "./EmployeeCardMenu";
import { useState } from "react";
interface Props {
  employee: Employee;
}

const EmployeeCard = ({ employee }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleMenu = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <div className="employee-card">
      <div className="employee-card__header">
        <div className="employee-avatar">
          {employee.firstName[0]}
          {employee.lastName[0]}
        </div>

        <div className="employee-info">
          <h3>
            {employee.firstName} {employee.lastName}
          </h3>
          <p className="designation">{employee.designation}</p>
        </div>
        <button type="button" onClick={toggleMenu} className="ml-auto">
          <img src={moreIcon} className="h-5 w-5" />
          {isModalOpen && <EmployeeCardMenu />}
        </button>
      </div>

      <div className="employee-card__body">
        <p>✉️ {employee.email}</p>
        <p>{employee.department}</p>
      </div>

      <div className="employee-card__footer">
        <span className={`status ${employee.isActive ? "active" : "inactive"}`}>
          {employee.isActive ? "Active" : "Inactive"}
        </span>
      </div>
    </div>
  );
};

export default EmployeeCard;
