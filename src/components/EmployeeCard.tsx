import type { Employee } from "../models/Employee";
import "./EmployeeCard.css";
import moreIcon from "../assets/more.svg";
import EmployeeCardMenu from "./EmployeeCardMenu";

interface Props {
  employee: Employee;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

const EmployeeCard = ({ employee, isMenuOpen, onToggleMenu }: Props) => {
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
        <button
          type="button"
          onClick={onToggleMenu}
          className="ml-auto relative"
        >
          <img src={moreIcon} className="h-5 w-5" />
          {isMenuOpen && <EmployeeCardMenu />}
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
