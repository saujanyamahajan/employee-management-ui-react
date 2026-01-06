import peopleIcon from "../assets/people.svg";

function HomePageNavBar() {
  return (
    <>
      <div className="navBar flex gap-3">
        <img src={peopleIcon} className="h-10 w-10 mt-2" />
        <div>
          <h2>Employee Management Portal</h2>
          <h4 className="subHeading">Manage your team members</h4>
        </div>
      </div>
    </>
  );
}

export default HomePageNavBar;
