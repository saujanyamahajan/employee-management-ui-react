import EmployeeList from "./EmployeeListPage";  
import "./EmployeePage.css";

const EmployeesPage = () => {
  return (
     <div className="employees-page">
      {/* Header */}
      <div className="header">
                <div className="header-actions">
        <div>
          <h1>Employees</h1>
          {/* <p>{filteredEmployees.length} total employees</p> */}
        </div>
        <button className="add-btn">+ Add Employee</button>
        </div>

         {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search employees by name, email, department, or role..."
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
                  <EmployeeList />
      </div>
    </div>
  );
};

export default EmployeesPage;

