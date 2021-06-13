import { Link } from "react-router-dom";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import classes from "./NewQuizLink.module.scss";

const NewQuizLink = () => {
  return (
    <Link to="/" className={classes.NewQuizLink}>
      Take another quiz
      <PlayCircleOutlineIcon className={classes.AnotherQuizIcon} />
    </Link>
  );
};
export default NewQuizLink;
