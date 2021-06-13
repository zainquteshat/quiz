import _ from "lodash";
import classes from "./Question.module.scss";

const Question = ({
  question,
  correctAnswer,
  allAnswers,
  optionClickedHandler,
}) => {
  const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

  const answerClicked = (asnw) => {
    let isCorrect = asnw === correctAnswer;
    optionClickedHandler(isCorrect);
  };

  function createMarkup(question) {
    return { __html: question };
    // return _ .unescape(question);
  }

  return (
    <div className={classes.QuestionSection}>
      <p
        className={classes.Question}
        dangerouslySetInnerHTML={createMarkup(question)}
      ></p>
      {shuffledAnswers.map((asnw, indx) => {
        return (
          <button
            key={indx}
            className={classes.Option}
            onClick={() => answerClicked(asnw)}
          >
            {asnw}
          </button>
        );
      })}
    </div>
  );
};
export default Question;
