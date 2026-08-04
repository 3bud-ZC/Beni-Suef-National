import React, { useState } from 'react';

interface LoginFormProps {
  onSuccess: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [seatNumber, setSeatNumber] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const VALID_SEAT_NUMBER = '230302';
  const VALID_NATIONAL_ID = '30502152604351';

  const handleSeatNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= 10) {
      setSeatNumber(val);
      if (errorMsg) setErrorMsg('');
    }
  };

  const handleNationalIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= 14) {
      setNationalId(val);
      if (errorMsg) setErrorMsg('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanSeat = seatNumber.trim();
    const cleanId = nationalId.trim();

    if (cleanSeat === VALID_SEAT_NUMBER && cleanId === VALID_NATIONAL_ID) {
      setErrorMsg('');
      onSuccess();
    } else {
      setErrorMsg('بيانات الطالب غير صحيحة، يرجى التأكد من رقم الجلوس والرقم القومي.');
    }
  };

  return (
    <div className="form-card-container">
      <div className="form-card">
        <p className="form-instruction">
          أدخل رقم الجلوس والرقم القومي المسجلين بالجامعة لعرض النتيجة التفصيلية.
        </p>

        {errorMsg && <div className="error-banner" role="alert">{errorMsg}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-fields-grid">
            <div className="form-group">
              <label htmlFor="seatNumberInput" className="form-label">
                رقم الجلوس
              </label>
              <input
                id="seatNumberInput"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={10}
                placeholder="أدخل رقم الجلوس"
                value={seatNumber}
                onChange={handleSeatNumberChange}
                className={`form-input ${errorMsg ? 'error' : ''}`}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nationalIdInput" className="form-label">
                الرقم القومي
              </label>
              <input
                id="nationalIdInput"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={14}
                placeholder="أدخل الرقم القومي"
                value={nationalId}
                onChange={handleNationalIdChange}
                className={`form-input ${errorMsg ? 'error' : ''}`}
                autoComplete="off"
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            عرض النتيجة
          </button>
        </form>

        <p className="form-note">
          في حالة وجود مشكلة في البيانات، يرجى مراجعة إدارة برنامج الطب البشري.
        </p>
      </div>
    </div>
  );
};
