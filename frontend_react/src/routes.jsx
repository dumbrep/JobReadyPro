import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InterviewForm from "./interview_form";
import Interview from "./interview_page";
import Ats from "./atspage";
import Home from "./homepage";
import Jobs from "./jobPage";
function Route_page() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interviewForm" element={<InterviewForm />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/atsChecking" element={<Ats />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
}

export default Route_page;
