import React from 'react';

interface GradeBadgeProps {
  rating: 'جيد جداً' | 'جيد' | 'مقبول' | 'ناجح';
}

export const GradeBadge: React.FC<GradeBadgeProps> = ({ rating }) => {
  let badgeClass = '';

  switch (rating) {
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
    default:
      badgeClass = 'grade-badge-pass';
  }

  return (
    <span className={`grade-badge ${badgeClass}`}>
      {rating}
    </span>
  );
};
