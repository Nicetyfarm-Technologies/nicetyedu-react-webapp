import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    )
}

export default Home;