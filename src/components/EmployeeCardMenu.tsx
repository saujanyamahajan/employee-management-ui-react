function EmployeeCardMenu() {
  return (
    <div className="absolute right-0 bg-white outline outline-1 outline-gray-200 px-2 py-2 rounded-md shadow-2xl flex flex-col w-max">
      <button className="hover:bg-[#d1fae5] rounded-md px-2 py-1 text-left ">
        View Details
      </button>
      <button className="hover:bg-[#d1fae5] rounded-md px-2 py-1 text-left ">
        Edit
      </button>
      <button className="hover:bg-[#fee2e2] text-red-500 rounded-md px-2 py-1 text-left ">
        Delete
      </button>
    </div>
  );
}

export default EmployeeCardMenu;
