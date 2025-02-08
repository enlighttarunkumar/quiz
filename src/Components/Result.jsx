import { useSelector, useDispatch } from "react-redux";
import { restartQuiz } from "../redux/quizSlice";
import { Link } from "react-router-dom";

function Result() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.quiz.score);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Quiz Completed!</h1>
      <p className="text-lg">Your Score: {score}</p>
      <Link to="/">
        <button onClick={() => dispatch(restartQuiz())} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Play Again
        </button>
      </Link>
    </div>
  );
}

export default Result;
