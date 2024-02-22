import React from 'react';
import Recomendation from './Recomendation';
import styles from '../css/RegistrationPage.module.css';
import arrowLeft from '../../../../assets/SquareAltArrowLeft.png';
import { useNavigate } from 'react-router-dom';
interface RegistrationFormProps {
  email: string;
  password: string;
  repeatPassword: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setRepeatPassword: React.Dispatch<React.SetStateAction<string>>;
  handleRegister: () => void;
  error: string | undefined;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  email,
  password,
  repeatPassword,
  setEmail,
  setPassword,
  setRepeatPassword,
  handleRegister,
  error,
}) => {
const navigate = useNavigate()
  return (
    <>
  <div className={styles.container_register_form}>
      <div className={styles.header_register}>
        <img src={arrowLeft} alt="" onClick={()=> navigate('/auth')}/>
        <span className={styles.form_title}>Регистрация</span>
      </div>
      <div className={styles.input_container}>
        <input
          className={styles.input}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <input
          className={styles.input}
          type="password"
          placeholder="Повторите пароль"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          />
          </div>
      <div className={styles.error}>{error}</div>

      <Recomendation />
      <button type="button" className={styles.submit} onClick={handleRegister}>
        Зарегистрироваться
      </button>
      </div>
    </>
  );
};

export default RegistrationForm;
