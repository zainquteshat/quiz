import { Link } from "react-router-dom";
import classes from "./Category.module.scss";

const Category = ({ title, icon, category_id }) => {
  return (
    <Link
      to={`quiz?chosen_category=${title}&category_id=${category_id}`}
      className={classes.Category}
    >
      <p className={classes.Icon}>{icon}</p>
      <p className={classes.Title}>{title}</p>
    </Link>
  );
};
export default Category;
