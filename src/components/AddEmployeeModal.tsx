import { useState } from "react";
import type { CreateEmployee } from "../models/Employee";
import { insertEmployee } from "../api/employeeService";
import CloseIcon from "../assets/close.svg";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  status: string;
};
const initialState: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  role: "",
  department: "",
  status: "",
};

type AddEmployeeModalProps = {
  onClose: () => void;
};

function AddEmployeeModal({ onClose }: AddEmployeeModalProps) {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setFormData(initialState);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newEmployee: CreateEmployee = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email,
        phone: formData.phone,
        department: formData.department,
        designation: formData.role,
        isActive: formData.status === "active",
      };

      console.log("Submitting payload:", newEmployee);

      const response = await insertEmployee(newEmployee);
      console.log("Employee added:", response);
      setFormData(initialState);
    } catch (error) {
      console.error("Failed to add employee", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-blue-700">
        <div className="flex items-center bg-red-800">
          <h3>Add New Employee</h3>
          <button type="button" onClick={onClose}>
            <img src={CloseIcon} alt="Close" className="h-5 w-5" />
          </button>
        </div>
        {/* <div> */}
        <p>Enter the details of the new employee to add them to the system.</p>
        {/* </div> */}
        <div>
          <div>
            <label>First Name</label>
            <input
              name="firstName"
              type="text"
              placeholder="Joe"
              onChange={handleChange}
              value={formData.firstName}
            />
            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              placeholder="Dane"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="joe.dane@gmail.com"
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91-8800800021"
            />
          </div>
          <div>
            <label>Role</label>
            <input
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              placeholder="Software Developer"
            />
          </div>
          <div>
            <label>Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">Select option</option>
              <option value="engineering">Engineering</option>
              <option value="product">Product</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="humanResource">Human Resources</option>
              <option value="finance">Finance</option>
            </select>
          </div>
          <div>
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">Select option</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="onLeave">On Leave</option>
            </select>
          </div>
        </div>
        <div>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Add Employee"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddEmployeeModal;
