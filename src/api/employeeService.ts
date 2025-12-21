import axios from "axios"; //a promise-based HTTP client
import type { Employee } from "../models/Employee";

const apiInstance = axios.create({
  baseURL: 'http://localhost:5244/api',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

const ApiEndpoints = {
  GET_EMPLOYEES: "/employee",
  GET_EMPLOYEE_BY_ID: "/employee"
} as const;

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await apiInstance.get<Employee[]>(ApiEndpoints.GET_EMPLOYEES);
  return response.data;
};
export const getEmployeeById = async (id: number): Promise<Employee> => {
  const response = await apiInstance.get<Employee>(`${ApiEndpoints.GET_EMPLOYEE_BY_ID}/${id}`);
  return response.data;
}