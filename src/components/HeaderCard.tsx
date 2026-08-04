import React from 'react';
import logoImg from '../assets/logo.jpg';

export const HeaderCard: React.FC = () => {
  return (
    <header className="header-card">
      <img
        src={logoImg}
        alt="شعار جامعة بني سويف الأهلية"
        className="university-logo"
      />
      <h1 className="main-title">جامعة بني سويف الأهلية</h1>
      <h2 className="sub-title-1">برنامج الطب البشري والجراحة</h2>
      <p className="sub-title-2">نتيجة الفرقة الثانية - الدور الأول</p>
      <p className="academic-year">٢٠٢٥ - ٢٠٢٦</p>
    </header>
  );
};
