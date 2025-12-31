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
      <div className="bg-slate-300 rounded-md px-7 py-7 absolute right-0 z-50 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex items-center gap-60 ">
          <h1 className="text-xl font-bold">Add New Employee</h1>
          <button type="button" onClick={onClose}>
            <img src={CloseIcon} alt="Close" className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-1">
          <p>
            Enter the details of the new employee to add them to the system.
          </p>
        </div>
        <div className="mt-5">
          <div className="mt-2 flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              className="px-3 py-2 border border-black rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              name="firstName"
              type="text"
              placeholder="Joe"
              onChange={handleChange}
              value={formData.firstName}
            />
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <label>Last Name</label>
            <input
              className="px-3 py-2 border border-black rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              name="lastName"
              type="text"
              placeholder="Dane"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <label>Email</label>
            <input
              className="px-3 py-2 border border-black rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="joe.dane@gmail.com"
            />
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <label>Phone</label>
            <input
              className="px-3 py-2 border border-black rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91-8800800021"
            />
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <label>Role</label>
            <input
              className="px-3 py-2 border border-black rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              placeholder="Software Developer"
            />
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <label>Department</label>
            <select
              className="px-3 py-2 border border-black rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
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
          <div className="mt-2 flex flex-col gap-1">
            <label>Status</label>
            <select
              className="px-3 py-2 border border-black rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
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
        <div className="mt-6 flex justify-end gap-3">
          <button
            className="mr-4 px-4 py-2 bg-white text-black rounded-md hover:bg-blue-700 active:scale-95 disabled:bg-gray-400"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-700 active:scale-95 disabled:bg-gray-400"
            type="submit"
            disabled={loading}
          >
            {loading ? "Saving..." : "Add Employee"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddEmployeeModal;
