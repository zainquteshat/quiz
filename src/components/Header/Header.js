import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => (
  <Link to="/" className={classes.Header}>
    <span>Flashing Quizzes</span>
  </Link>
);

export default Header;
