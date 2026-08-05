import React from 'react';

interface GradeBadgeProps {
  rating: string;
}

export const GradeBadge: React.FC<GradeBadgeProps> = ({ rating }) => {
  let badgeClass = '';

  switch (rating) {
    case 'ممتاز':
    case 'امتياز':
      badgeClass = 'grade-badge-excellent';
      break;
    case 'جيد جداً':
      badgeClass = 'grade-badge-very-good';
      break;
    case 'جيد':
      badgeClass = 'grade-badge-good';
      break;
    case 'مقبول':
      badgeClass = 'grade-badge-acceptable';
      break;
    case 'ناجح':
      badgeClass = 'grade-badge-pass';
      break;
    case 'راسب لايح':
    case 'راسب':
      badgeClass = 'grade-badge-fail';
      break;
    default:
      badgeClass = 'grade-badge-pass';
  }

  return (
    <span className={`grade-badge ${badgeClass}`}>
      {rating}
    </span>
  );
};
