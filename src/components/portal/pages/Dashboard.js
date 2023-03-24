import InNavBar from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";

const DashboardPage = () => {

  const showNavContent = () => {
    navRef.current.classList.toggle("responsive");
    // navRef2.current.classList.toggle("responsive");
    navRef3.current.classList.toggle("none");
    navRef4.current.classList.toggle("block");
  };
  
    return (
      <>
        <InNavBar />
        <Dashboard />
      </>
    )
}

export default DashboardPage;