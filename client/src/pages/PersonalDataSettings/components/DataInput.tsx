import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  RefObject,
} from 'react';
import style from '../css/PersonalDataSettings.module.css';

const DateInput = ({
  setDate,
  date_of_birth,
}: {
  setDate: React.Dispatch<React.SetStateAction<string>>;
  date_of_birth: string;
}) => {
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');

  useEffect(() => {
    // Разбиваем строку на подстроки по точкам
    const dateParts = date_of_birth.split('.');

    // Проверяем формат даты
    const validDateFormat = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
    if (date_of_birth && validDateFormat.test(date_of_birth)) {
      // Устанавливаем состояния
      setDay(dateParts[0] || ''); // Первая подстрока - день
      setMonth(dateParts[1] || ''); // Вторая подстрока - месяц
      setYear(dateParts[2] || ''); // Третья подстрока - год
    }
  }, [date_of_birth]);

  useEffect(() => {
    setDate(`${day}.${month}.${year}`);
  }, [day, month, setDate, year]);

  const dayInput = useRef(null);
  const monthInput = useRef(null);
  const yearInput = useRef(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    nextInput: RefObject<HTMLInputElement>
  ) => {
    const input = e.target;
    const value = input.value;

    if (value.length >= Number(input.maxLength)) {
      if (nextInput.current) {
        nextInput.current.focus();
      }
    }

    switch (input.name) {
      case 'day':
        if (value === '' || (+value >= 0 && +value <= 31)) {
          setDay(value);
        }
        break;
      case 'month':
        if (value === '' || (+value >= 0 && +value <= 12)) {
          setMonth(value);
        }
        break;
      case 'year':
        setYear(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`${style.data_container} ${style.data_text}`}>
      <div className={style.data_box}>
        <input
          ref={dayInput}
          type="text"
          name="day"
          maxLength={2}
          placeholder="ДД"
          value={day}
          onChange={(e) => handleInputChange(e, monthInput)}
        />
        /
        <input
          ref={monthInput}
          type="text"
          name="month"
          maxLength={2}
          placeholder="ММ"
          value={month}
          onChange={(e) => handleInputChange(e, yearInput)}
        />
        /
        <input
          ref={yearInput}
          type="text"
          name="year"
          maxLength={4}
          placeholder="ГГГГ"
          value={year}
          onChange={(e) => handleInputChange(e, yearInput)}
        />
      </div>
    </div>
  );
};

export default DateInput;
