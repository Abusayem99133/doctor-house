import { Link } from "react-router-dom";
import error from "../assets/image/404-error-abstract-concept-vector-38336894.jpg";
const ErrorPage = () => {
  return (
    <div className="hero h-screen" style={{ backgroundImage: `url(${error})` }}>
      <div className="-mb-8">
        <Link to="/">
          {" "}
          <button className="btn btn-outline border-b-4 text-white border-orange-400">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
