import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const history = useNavigate();

  const goToDashboardHandler = () => {
    history("/dashboard");
  };
  return (
    <>
      <h1>Header Comp</h1>
      <Link to="/dashboard">
        <h2>Dashboard</h2>
      </Link>
    </>
  );
};
export default Header;
