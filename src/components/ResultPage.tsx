import React from 'react';
import { STUDENT_DATA } from '../data/studentData';
import { StudentSummaryCards } from './StudentSummaryCards';
import { ResultTable } from './ResultTable';

interface ResultPageProps {
  onLogout: () => void;
}

export const ResultPage: React.FC<ResultPageProps> = ({ onLogout }) => {
  return (
    <div className="portal-container">
      <h1 className="student-header-title">{STUDENT_DATA.studentName}</h1>
      <StudentSummaryCards studentData={STUDENT_DATA} />
      <ResultTable courses={STUDENT_DATA.courses} />
      <div className="back-btn-container">
        <button type="button" onClick={onLogout} className="back-btn">
          العودة لصفحة البحث
        </button>
      </div>
      <footer className="footer-text">
        جميع الحقوق محفوظة © جامعة بني سويف الأهلية
      </footer>
    </div>
  );
};
