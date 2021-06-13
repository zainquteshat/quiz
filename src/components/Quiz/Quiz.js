import { useEffect, useState, useCallback } from "react";
import { useQuery } from "../../hooks/useQuery";

import QuizHeader from "./QuizHeader/QuizHeader";
import Question from "./Question/Question";
import Result from "../Result/Result";

import classes from "./Quiz.module.scss";

const QUESTIONS_AMOUNT = 10;
const SCORE_INCREMENT_VALUE = 10;

// TODO: Add to axios interceptor
const API_ENDPOINT = "https://opentdb.com/api.php";

const Quiz = () => {
  const query = useQuery("");
  const [questions, setQuestions] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [chosenCategoryTitle, setChosenCategoryTitle] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [score, setScore] = useState(0);

  const fetchQuestions = useCallback(() => {
    // TODO: Replace fetch with axios
    // TODO: Handle errors
    fetch(
      `${API_ENDPOINT}?amount=${QUESTIONS_AMOUNT}&category=${categoryId}`
    ).then((response) => {
      response.json().then((jsonResponse) => {
        setQuestions(jsonResponse.results);
      });
    });
  }, [categoryId]);

  const onAnswerClicked = (isCorrect) => {
    if (isCorrect) {
      setScore((prevState) => prevState + SCORE_INCREMENT_VALUE);
    }
    setActiveStep((prevState) => prevState + 1);
  };

  const hasNoQuestions = () => {
    return !questions.length;
  };

  const isQuizFinished = () => {
    return activeStep === 10;
  };

  const renderQuizHeader = () => {
    return (
      !isQuizFinished() && (
        <QuizHeader
          score={score}
          activeStep={activeStep}
          chosenCategoryTitle={chosenCategoryTitle}
        />
      )
    );
  };

  const renderSpinner = () => {
    // TODO: Replace Loading with CSS Spinner
    return <p> Loading </p>;
  };

  const activeQuestion = questions[activeStep];

  const renderQuestions = () => {
    if (hasNoQuestions()) {
      return renderSpinner();
    }

    if (!isQuizFinished()) {
      const { question, correct_answer, incorrect_answers } = activeQuestion;
      return (
        <Question
          question={question}
          correctAnswer={correct_answer}
          onAnswerClicked={onAnswerClicked}
          allAnswers={[...incorrect_answers, correct_answer]}
        />
      );
    }
  };

  const renderQuizResults = () => {
    return isQuizFinished() && <Result score={score} />;
  };

  useEffect(() => {
    setCategoryId(query.get("category_id"));
    setChosenCategoryTitle(query.get("chosen_category"));
    fetchQuestions();
  }, [categoryId]);

  return (
    <div className={classes.Quiz}>
      {renderQuizHeader()}
      {renderQuestions()}
      {renderQuizResults()}
    </div>
  );
};
export default Quiz;
