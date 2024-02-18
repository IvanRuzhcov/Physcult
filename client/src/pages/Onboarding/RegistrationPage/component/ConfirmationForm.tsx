
// components/ConfirmationForm.js
import React, { CSSProperties, ChangeEvent, useRef } from 'react';
import styles from '../css/RegistrationPage.module.css';
import arrowLeft from '../../../../assets/SquareAltArrowLeft.png';

interface ConfirmationFormProps {
    numbers: string[];
    handleVerification: () => void;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
    status: boolean;
    setNumbers: React.Dispatch<React.SetStateAction<string[]>>;
    setVerificationCode: React.Dispatch<React.SetStateAction<string>>;
    error:string | undefined
  }
  
  const ConfirmationForm: React.FC<ConfirmationFormProps> = ({ numbers, handleVerification, setStatus, status, setNumbers, setVerificationCode , error }) => {

    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
      ];
    
      const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        index: number
      ) => {
        const inputValue = e.target.value;
    
        if (index < 3) {
          const updatedNumbers = [...numbers];
          updatedNumbers[index] = inputValue;
          setNumbers(updatedNumbers);
    
          if (inputRefs[index + 1].current) {
            inputRefs[index + 1].current!.focus();
          }
        } else if (index === 3) {
          // Валидация для последнего input
          if (inputValue.length <= 1) {
            const updatedNumbers = [...numbers];
            updatedNumbers[index] = inputValue;
            setNumbers(updatedNumbers);
            setVerificationCode(updatedNumbers.join(''));
          }
        }
      };

    const getInputStyle = (value: string): CSSProperties => {
        return value
          ? { backgroundColor: 'white' }
          : { backgroundColor: '#E4E5E7' };
      };
  return (
    <>
      <div className={styles.header_register}>
        <img src={arrowLeft} alt="" onClick={() => setStatus(!status)} />
        <span className={styles.form_title}>Подтверждение</span>
      </div>
      <div className={styles.confirmation_contsiner}>
        <span>Введите код из СМС</span>
        <div className={styles.confirmation_number}>
          {numbers.map((number, index) => (
            <input
              key={index}
              type="text"
              value={number}
              onChange={(e) => handleInputChange(e, index)}
              ref={inputRefs[index]}
              style={getInputStyle(number)}
            />
          ))}
        </div>
        <div className={styles.error}>{error}</div>
        <div className={styles.timer}>
          Новый код можно получить через 60 сек.
        </div>
        <div className={styles.request_number}>Получить</div>
      </div>
      <div>
        <button
          type="button"
          className={styles.submit}
          onClick={handleVerification}
        >
          Продолжить
        </button>
      </div>
    </>
  );
};

export default ConfirmationForm;
