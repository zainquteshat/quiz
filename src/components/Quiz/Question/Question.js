import classes from "./Question.module.scss";

const Question = ({ question, correctAnswer, allAnswers, onAnswerClicked }) => {
  const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

  const isCorrectAnswer = (clickedAnswer) => {
    return clickedAnswer === correctAnswer;
  };

  const answerClicked = (clickedAnswer) => {
    let isCorrect = isCorrectAnswer(clickedAnswer);
    onAnswerClicked(isCorrect);
  };

  function createMarkup(data) {
    // TODO:Find an alternative
    return { __html: data };
  }

  const renderQuestion = () => (
    <p
      className={classes.Question}
      dangerouslySetInnerHTML={createMarkup(question)}
    ></p>
  );
  const renderShuffledAnswers = () => {
    return shuffledAnswers.map((answer) => {
      return (
        <button
          key={answer}
          className={classes.Option}
          onClick={() => answerClicked(answer)}
          dangerouslySetInnerHTML={createMarkup(answer)}
        />
      );
    });
  };

  return (
    <div className={classes.QuestionSection}>
      {renderQuestion()}
      {renderShuffledAnswers()}
    </div>
  );
};
export default Question;
