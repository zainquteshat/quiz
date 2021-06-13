import { useEffect, useState, useCallback } from "react";

import { useQuery } from "../../hooks/useQuery";
import QuizHeader from "./QuizHeader/QuizHeader";
import Question from "./Question/Question";
import Result from "../Result/Result";
import NewQuizLink from "../NewQuizLink/NewQuizLink";

import _ from "lodash";

import classes from "./Quiz.module.scss";

const Quiz = (props) => {
  const query = useQuery("");
  const [questions, setQuestions] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  let [activeStep, setActiveStep] = useState(0);
  let [score, setScore] = useState(0);

  const [chosenCategory, setChosenCategory] = useState("");

  const fetchQuestions = useCallback(() => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}`).then(
      (response) => {
        response.json().then((jsRes) => {
          setQuestions(jsRes.results);
          console.log("jsRes.results.length: " + jsRes.results.length);
        });
      }
    );
  }, [categoryId]);

  useEffect(() => {
    setCategoryId(query.get("category_id"));
    setChosenCategory(query.get("chosen_category"));
    categoryId ? fetchQuestions() : console.log("category id is invalid");
  }, [categoryId]);

  const optionClickedHandler = (isCorrect) => {
    if (isCorrect) {
      setScore((prevState) => prevState + 10);
    }
    setActiveStep((prevState) => prevState + 1);
  };

  const renderQuestions = () => {
    let questionsDiv;
    if (!questions) {
      questionsDiv = <p> Loading </p>;
    } else if (activeStep < 10) {
      if (questions.length) {
        questionsDiv = (
          <>
            <div>
              <Question
                question={questions[activeStep].question}
                correctAnswer={questions[activeStep].correct_answer}
                allAnswers={[
                  ...questions[activeStep].incorrect_answers,
                  questions[activeStep].correct_answer,
                ]}
                optionClickedHandler={optionClickedHandler}
              />
            </div>
          </>
        );
      }
    }

    return questionsDiv;
  };

  return (
    <div className={classes.Quiz}>
      {activeStep < 10 ? (
        <QuizHeader
          score={score}
          activeStep={activeStep}
          chosenCategory={chosenCategory}
        />
      ) : (
        ""
      )}
      {renderQuestions()}
      {activeStep === 10 ? <Result score={score} /> : ""}

      {!questions.length ? (
        <h3 className={classes.errAlert}>
          <p className={classes.errTxt}>Something Went Wrong!</p>
          <NewQuizLink />
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};
export default Quiz;

// let stringifiedJSON = JSON.stringify(jsRes.results);
// let cleanRes = stringifiedJSON.replace(/[^a-zA-Z0-9]/g, "");
