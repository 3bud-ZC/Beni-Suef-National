import React from 'react';
import type { StudentData } from '../types';

interface StudentSummaryCardsProps {
  studentData: StudentData;
}

export const StudentSummaryCards: React.FC<StudentSummaryCardsProps> = ({ studentData }) => {
  return (
    <div className="summary-cards-grid">
      <div className="summary-card">
        <div className="summary-card-label">رقم الجلوس</div>
        <div className="summary-card-value">{studentData.seatNumber}</div>
      </div>

      <div className="summary-card">
        <div className="summary-card-label">الرقم القومي</div>
        <div className="summary-card-value">{studentData.nationalId}</div>
      </div>

      <div className="summary-card">
        <div className="summary-card-label">حالة الطالب</div>
        <div className="summary-card-value-text">{studentData.status}</div>
      </div>

      <div className="summary-card">
        <div className="summary-card-label">عدد المقررات</div>
        <div className="summary-card-value-text">{studentData.coursesCount}</div>
      </div>
    </div>
  );
};
