import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

const Homepage = () => {
  return (
    <>
      <PageNav />
      <AppNav />
      <h1 className="test">Worldwise page</h1>
      {/* <Link to="/pricing">Pricing</Link> */}
      <Link to="/app">Go to the App Layout</Link>
    </>
  );
};

export default Homepage;
