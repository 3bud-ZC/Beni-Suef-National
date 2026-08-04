import React from 'react';
import type { CourseResult } from '../types';
import { GradeBadge } from './GradeBadge';

interface ResultTableProps {
  courses: CourseResult[];
}

export const ResultTable: React.FC<ResultTableProps> = ({ courses }) => {
  return (
    <div className="table-card">
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
  );
};
