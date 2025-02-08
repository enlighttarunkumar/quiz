import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to the Quiz!</h1>
      <Link to="/quiz">
        <button className="mt-5 px-4 py-2 bg-blue-500 text-white rounded">
          Start Quiz
        </button>
      </Link>
    </div>
  );
}

export default Home;
