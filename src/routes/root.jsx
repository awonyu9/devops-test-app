import "./root.css";
import { Outlet, useNavigate } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

export default function Root() {
  const navigate = useNavigate();
  return (
    <div className="Root">
      <ScrollToTop />

      <div className="header">
        <div className="wartburg-logo"></div>
        <h1 onClick={() => navigate("/")}>Math Lab Resources</h1>
      </div>

      <Outlet />

      <div className="footer">
        <button className="top" onClick={() => window.scrollTo(0, 0)}>Back to top</button>
        <div className="wartburg-logo"></div>
        <h4>Peer Learning Lab 2022-23 ・ Math Lab ・ About us</h4>
      </div>
    </div>
  );
}