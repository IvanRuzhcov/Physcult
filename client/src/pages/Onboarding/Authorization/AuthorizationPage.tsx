import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../../assets/onboardingimage2.jpeg';
import styles from './css/AuthorizationPage.module.css';
import HeadlinePhyscult from './components/HeadlinePhyscult';
import { useAppDispatch } from '../../../store';
import { login } from '../../PersonalPage/userAuthSlice';

export default function AuthorizationPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAuth = async () => {
    try {
      const action = await dispatch(login({ email, password }));

      if (login.fulfilled.match(action) && action.payload.success) {
        setError('');
        setEmail('');
        setPassword('');
        navigate('/news');
      } else {
        setError(action.payload.error);
        console.error(action.payload.error);
      }
    } catch (error) {
      console.error('Произошла ошибка при авторизации:', error);
      // Обработка других ошибок при необходимости
    }
  };

  const handleRedirect = () => {
    navigate('/reg');
  };

  return (
    <div className={styles.conteiner}>
      <div className={styles.text_image}>
        <img src={heroImage} alt="" />
      </div>
      <HeadlinePhyscult />
      <form className={styles.form}>
        <h3 className={styles.form_title}>Вход</h3>
        <div className={styles.input_container}>
          <input
            className={styles.input}
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          className={styles.input}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>{error}</div>
        <button
          type="button"
          onClick={handleAuth}
          className={styles.submit_auth}
        >
          Войти
        </button>
        <button onClick={handleRedirect} className={styles.submit_reg}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
