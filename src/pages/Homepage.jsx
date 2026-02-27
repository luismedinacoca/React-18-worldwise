import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const Homepage = () => {
  return (
    <>
      <PageNav />
      <h1>Worldwise page</h1>
      <Link to="/pricing">Pricing</Link>
    </>
  );
};

export default Homepage;
