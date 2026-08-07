import React from 'react';
import type { CourseResult } from '../types';
import { GradeBadge } from './GradeBadge';

interface ResultTableProps {
  courses: CourseResult[];
}

export const ResultTable: React.FC<ResultTableProps> = ({ courses }) => {
  return (
    <>
      {/* Desktop Table View */}
      <div className="table-card desktop-only">
        <div className="table-responsive-wrapper">
          <table className="result-table">
            <thead>
              <tr>
                <th style={{ width: '60px' }}>م</th>
                <th className="th-course">المقرر</th>
                <th style={{ width: '140px' }}>الدرجة</th>
                <th style={{ width: '130px' }}>التقدير</th>
                <th style={{ width: '120px' }}>نقاط المقرر</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((row) => (
                <tr key={row.id}>
                  <td className="td-id">{row.id}</td>
                  <td className="td-course">{row.course}</td>
                  <td className="td-grade">{row.gradeString}</td>
                  <td>
                    <GradeBadge rating={row.rating} />
                  </td>
                  <td className="td-points">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards View */}
      <div className="mobile-courses-list mobile-only">
        {courses.map((row) => (
          <div key={row.id} className="mobile-course-card">
            <div className="mobile-course-row">
              <span className="mobile-course-label">م</span>
              <span className="mobile-course-val">{row.id}</span>
            </div>

            <div className="mobile-course-row mobile-course-title-row">
              <span className="mobile-course-label">المقرر</span>
              <div className="mobile-course-name">{row.course}</div>
            </div>

            <div className="mobile-course-row">
              <span className="mobile-course-label">الدرجة</span>
              <span className="mobile-course-val mobile-course-grade">{row.gradeString}</span>
            </div>

            <div className="mobile-course-row">
              <span className="mobile-course-label">التقدير</span>
              <div className="mobile-course-val">
                <GradeBadge rating={row.rating} />
              </div>
            </div>

            <div className="mobile-course-row mobile-course-last-row">
              <span className="mobile-course-label">نقاط المقرر</span>
              <span className="mobile-course-val">{row.points}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
