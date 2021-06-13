import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NewQuizLink from "../NewQuizLink/NewQuizLink";

import classes from "./Result.module.scss";

const Result = ({ score }) => (
  <div className={classes.Result}>
    <CardGiftcardIcon
      className={classes.GiftIcon}
      style={{ fontSize: "150px" }}
    />

    <p className={classes.Score}>You scored {score} Points!</p>

    <NewQuizLink />
  </div>
);

export default Result;
