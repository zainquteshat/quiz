import classes from "./Category.module.scss";

const Category = ({ title, icon }) => {
  return (
    <div className={classes.Category}>
      <p className={classes.Icon}>{icon}</p>
      <p className={classes.Title}>{title}</p>
    </div>
  );
};
export default Category;
