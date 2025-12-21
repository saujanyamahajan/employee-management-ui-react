import type { Employee } from "../models/Employee";

interface Props {
  employee: Employee;
}

const EmployeeCard = ({ employee }: Props) => {
  return (
    <div className="card">
      <h3>{employee.firstName} {employee.lastName}</h3>
      <p>{employee.designation}</p>
      <p>✉️ {employee.email}</p>
      <p>{employee.department}</p>
      <span>{employee.isActive ? "Active" : "Inactive"}</span>
    </div>
  );
};

export default EmployeeCard;
