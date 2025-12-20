import axios from "axios";
import type { Employee } from "../models/Employee";

const API_URL = "https://localhost:5244/api/Employee";

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await axios.get<Employee[]>(API_URL);
  return response.data;
};
export const getEmployeeById = async (id: number): Promise<Employee> => {
  const response = await axios.get<Employee>(`${API_URL}/${id}`);
  return response.data;
}