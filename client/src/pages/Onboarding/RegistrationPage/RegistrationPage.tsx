import React, {
  CSSProperties,
  ChangeEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import io from 'socket.io-client';
import heroImage from '../../../assets/onboardingimage2.jpeg';
import styles from './css/RegistrationPage.module.css';
import Svg from './component/Svg';
import Recomendation from './component/Recomendation';
import arrowLeft from '../../../assets/SquareAltArrowLeft.png';
import { json } from 'stream/consumers';

export default function RegistrationPage(): JSX.Element {
  const [numbers, setNumbers] = useState(['', '', '', '']);
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  // const socket = io(`http://localhost:4000`);

  const handleRegister = async () => {
    // Отправка запроса на сервер для получения кода подтверждения
    console.log('Email before sending:', email);
    try {
      const response = await fetch('/register/sendCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      response.json();
      // console.log( '--->', await response.json())

      if (response.ok) {
        // Переключение на форму ввода кода после успешной отправки
        setRegister(true);
      } else {
        console.error('Ошибка отправки запроса на сервер');
      }
    } catch (error) {
      console.error('Ошибка сети======>', error);
    }
  };

  const handleVerification = async () => {
    // Отправка кода подтверждения на сервер для проверки
    try {
      const response = await fetch('/register/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, verificationCode }),
      });

      if (response.ok) {
        // Здесь можно обработать успешное подтверждение и выполнить дополнительные действия,
        // например, зарегистрировать пользователя в базе данных.
        console.log('Код подтверждения успешно проверен');
      } else {
        console.error('Ошибка при проверке кода подтверждения');
      }
    } catch (error) {
      console.error('Ошибка сети', error);
    }
  };

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
      }
    }
  };

  const getInputStyle = (value: string): CSSProperties => {
    return value
      ? { backgroundColor: 'white' }
      : { backgroundColor: '#E4E5E7' };
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
        {register ? (
          <>
            <div className={styles.header_register}>
              <img
                src={arrowLeft}
                alt=""
                onClick={() => setRegister(!register)}
              />
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
        ) : (
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

            <Recomendation />
            <button
              type="button"
              className={styles.submit}
              onClick={handleRegister}
            >
              Зарегистрироваться
            </button>
          </>
        )}
      </form>
    </div>
  );
}
