import React, { useState } from 'react';
import heroImage from '../../../assets/onboardingimage2.jpeg';
import styles from './css/RegistrationPage.module.css';
import Svg from './component/Svg';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from './component/RegistrationForm';
import ConfirmationForm from './component/ConfirmationForm';
import { useAppDispatch } from '../../../store';
import { emailСonfirmation, userRegistation } from './registerSlice';

export default function RegistrationPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const [numbers, setNumbers] = useState(['', '', '', '']);

  const [status, setStatus] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const action = await dispatch(
        emailСonfirmation({ email, password, repeatPassword })
      );

      if (emailСonfirmation.fulfilled.match(action) && action.payload.success) {
        setStatus(true);
        setError('');
      } else {
        setError(action.payload.message);
        console.error(action.payload.message);
      }
    } catch (error) {
      console.error('Произошла ошибка при регистрации:', error);
      // Обработка других ошибок при необходимости
    }
  };

  const handleVerification = async () => {
    const action = await dispatch(
      userRegistation({ email, password, verificationCode })
    );
    if (userRegistation.fulfilled.match(action) && action.payload.success) {
      console.log('Регистрация успешно подтверждена');
      // Очистка полей после успешной регистрации
      setEmail('');
      setPassword('');
      setRepeatPassword('');
      setVerificationCode('');

      navigate('/profile');
    } else {
      setError(action.payload.message);
      console.error(action.payload.message);
    }
  };

  return (
    <div className={styles.conteiner}>
      <div className={styles.text_image}>
        <img src={heroImage} alt="" />
      </div>
      <div className={styles.headline}>
        <Svg />
      </div>

      <form className={styles.form}>
        {status ? (
          <ConfirmationForm
            numbers={numbers}
            handleVerification={handleVerification}
            setStatus={setStatus}
            status={status}
            setNumbers={setNumbers}
            setVerificationCode={setVerificationCode}
            error={error}
          />
        ) : (
          <RegistrationForm
            email={email}
            password={password}
            repeatPassword={repeatPassword}
            setEmail={setEmail}
            setPassword={setPassword}
            setRepeatPassword={setRepeatPassword}
            handleRegister={handleRegister}
            error={error}
          />
        )}
      </form>
    </div>
  );
}
