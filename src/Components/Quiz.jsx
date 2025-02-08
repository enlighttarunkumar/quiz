import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuiz, nextQuestion, updateScore } from "../redux/quizSlice";
import { useNavigate } from "react-router-dom";
import QuestionCard from "./QuestionCard";

function Quiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, currentQuestion, status } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) dispatch(updateScore(10));

    if (currentQuestion + 1 < questions.length) {
      dispatch(nextQuestion());
    } else {
      navigate("/result");
    }
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading quiz.</p>;

  return (
    <div className="flex flex-col items-center">
      {questions.length > 0 && (
        <QuestionCard question={questions[currentQuestion]} onAnswer={handleAnswer} />
      )}
    </div>
  );
}

export default Quiz;
