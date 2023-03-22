import { useEffect } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import resourcesJSON from "../resources.json";
// might want to use a NavLink to control how the current selected course looks

export default function Subject() {
  const { subject } = useParams();  
  const navigate = useNavigate();
  const courses = resourcesJSON[subject].courses;
  // console.log(courses)

  useEffect(() => {
    if (subject === "computer-science") {
      navigate("./cs120")
    }
  }, [])

  var title = subject === "mathematics" ? "Mathematics" : "Computer Science";

  return (
    <div className="Subject">
      <div className="back" onClick={() => navigate("/")}>
        Back to subject selection
      </div>
      <h2>{title}</h2>
      {courses.map((course, i) => (
        <button
          key={i}
          onClick={() => navigate(`./${Object.keys(course)[0]}`)}
        >
          {`${course[Object.keys(course)[0]].code}:
          ${course[Object.keys(course)[0]].title}`}
        </button>
      ))}
      <Outlet />
    </div>
  );
}