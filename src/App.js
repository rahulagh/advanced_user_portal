import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RankingSystem from './components/SkillRanking/RankingSystem/RankingSystem';
import JobMatcher from './components/JobMatching/JobMatcher';
import RegistrationForm from "./components/CertficationExam/RegistrationForm/RegistrationForm";
import ExamDetails from "./components/CertficationExam/ExamDetails/ExamDetails";
import Payment from "./components/CertficationExam/PaymentPage/PaymentPage";
import CertificationDetails from "./components/CertficationExam/CertificationDetails/CertificationDetails";
import ExamContent from "./components/CertficationExam/ExamContent/ExamContent";
import ExamScheduling from "./components/CertficationExam/ExamScheduling/ExamScheduling";
import CandidatePreparation from "./components/CertficationExam/CandidatePreparation/CandidatePreparation";
import ExamAdministration from "./components/CertficationExam/ExamAdministration/ExamAdministration";
import ResultsFeedback from "./components/CertficationExam/ResultsFeedback/ResultsFeedback";
import ExamsAvailable from "./components/CertficationExam/ExamsAvailable/ExamsAvailable";
import ExamHomePage from "./components/CertficationExam/ExamHomePage/ExamHomePage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exam-home" element={<ExamHomePage />} />
        <Route path="/skill-ranking" element={<RankingSystem />} />
        <Route path="/job-matching" element={<JobMatcher />} />
        <Route path="/exams-available" element={<ExamsAvailable />} />
        <Route path="/register/:examId" element={<RegistrationForm />} />
        <Route path="/exam-details/:examId" element={<ExamDetails />} />
        <Route path="/certificate-details/:examId" element={<CertificationDetails />} />
        <Route path="/exam-content/:examId" element={<ExamContent />} />
        <Route path="/exam-scheduling/:examId" element={<ExamScheduling />} />
        <Route path="/candidate-preparation/:examId" element={<CandidatePreparation />} />
        <Route path="/exam-administration/:examId" element={<ExamAdministration />} />
        <Route path="/results-feedback/:examId" element={<ResultsFeedback />} />
        <Route path="/payment/:examId" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;