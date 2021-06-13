import StarsIcon from "@material-ui/icons/Stars";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import LabelIcon from "@material-ui/icons/Label";

import classes from "./QuizHeader.module.scss";

const QuizHeader = ({ score, activeStep, chosenCategory }) => {
  return (
    <div className={classes.QuizHeader}>
      <div className={classes.Info}>
        <LabelIcon className={classes.LabelIcon} />
        <p className={classes.ProgressInfo}>{chosenCategory}</p>
      </div>

      <div className={classes.Info}>
        <DonutSmallIcon className={classes.QuestionIcon} />
        <p className={classes.ProgressInfo}>{activeStep} of 10 Questions</p>
      </div>

      <div className={classes.Info}>
        <StarsIcon className={classes.Star} />
        <p className={classes.ProgressInfo}>{score} Points</p>
      </div>
    </div>
  );
};
export default QuizHeader;
