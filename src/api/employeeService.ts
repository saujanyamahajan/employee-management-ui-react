import axios from "axios"; //a promise-based HTTP client
import type { Employee, CreateEmployee } from "../models/Employee";

const apiInstance = axios.create({
  baseURL: 'http://localhost:5244/api',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

const ApiEndpoints = {
  GET_EMPLOYEES: "/employee",
  GET_EMPLOYEE_BY_ID: "/employee",
  DELETE_EMPLOYEE_BY_ID:"/employee",
  INSERT_EMPLOYEE:"/employee",
  UPDATE_EMPLOYEE_BY_ID:"/employee"
} as const;

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await apiInstance.get<Employee[]>(ApiEndpoints.GET_EMPLOYEES);
  return response.data;
};
// export const getEmployeeById = async (id: number) => {}
export const getEmployeeById = async (id: number): Promise<Employee> => {
  const response = await apiInstance.get<Employee>(`${ApiEndpoints.GET_EMPLOYEE_BY_ID}/${id}`);
  return response.data;
};
export const deleteEmployeeById = async (id: number): Promise<void> => {
  await apiInstance.delete(`${ApiEndpoints.DELETE_EMPLOYEE_BY_ID}/${id}`);
};
export const insertEmployee = async (
  employee: CreateEmployee
): Promise<Employee> => {
  const response = await apiInstance.post<Employee>(
    ApiEndpoints.INSERT_EMPLOYEE,
    employee
  );
  return response.data;
};
export const updateEmployee= async(id: number,employee: Employee):Promise<Employee>=>{
    const response = await apiInstance.put<Employee>(`${ApiEndpoints.UPDATE_EMPLOYEE_BY_ID}/${id}`,employee);
  return response.data;
}
