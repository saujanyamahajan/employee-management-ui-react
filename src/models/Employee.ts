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
