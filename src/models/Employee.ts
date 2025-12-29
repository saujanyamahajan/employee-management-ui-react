export interface Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  department: string;
  designation?: string;
  dateOfJoining?: string;
  isActive?: boolean;
}

// Type for creating a new employee (without employeeId since it's auto-generated)
export type CreateEmployee = Omit<Employee, 'employeeId'>;

