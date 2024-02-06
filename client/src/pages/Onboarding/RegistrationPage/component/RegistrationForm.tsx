import React from 'react';
import Recomendation from './Recomendation';
import styles from '../css/RegistrationPage.module.css';

interface RegistrationFormProps {
  email: string;
  password: string;
  repeatPassword: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setRepeatPassword: React.Dispatch<React.SetStateAction<string>>;
  handleRegister: () => void;
  error:string | undefined
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
  return (
    <>
      <h3 className={styles.form_title}>Регистрация</h3>
      <div className={styles.input_container}>
        <input
          className={styles.input}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span></span>
      </div>
      <div className={styles.input_container}>
        <input
          className={styles.input}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.input_container}>
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
    </>
  );
};

export default RegistrationForm;
