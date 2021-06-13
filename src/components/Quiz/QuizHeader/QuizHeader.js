import StarsIcon from "@material-ui/icons/Stars";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import LabelIcon from "@material-ui/icons/Label";

import classes from "./QuizHeader.module.scss";

const QuizHeader = ({ score, activeStep, chosenCategoryTitle }) => (
  // TODO: Create a component called QuizHeaderInfo
  <div className={classes.QuizHeader}>
    <div className={classes.Info}>
      <LabelIcon className={classes.LabelIcon} />
      <p className={classes.InfoLabel}>{chosenCategoryTitle}</p>
    </div>

    <div className={classes.Info}>
      <DonutSmallIcon className={classes.QuestionIcon} />
      <p className={classes.InfoLabel}>{activeStep + 1} of 10 Questions</p>
    </div>

    <div className={classes.Info}>
      <StarsIcon className={classes.Star} />
      <p className={classes.InfoLabel}>{score} Points</p>
    </div>
  </div>
);

export default QuizHeader;
