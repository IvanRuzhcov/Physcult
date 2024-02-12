import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import style from '../css/PersonalDataSettings.module.css';

const DateInput = ({
  setDate,
}: {
  setDate: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');

  useEffect(() => {
    setDate(`${day}.${month}.${year}`);
  }, [day, month, year]);

  const dayInput = useRef(null);
  const monthInput = useRef(null);
  const yearInput = useRef(null);

  const handleInputChange = (e: any, nextInput: any) => {
    const input = e.target;
    const value = input.value;

    if (value.length >= Number(input.maxLength)) {
      nextInput.current.focus();
    }

    let parsedValue = parseInt(value, 10);

    switch (input.name) {
      case 'day':
        if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 31) {
          setDay(value);
        }
        break;
      case 'month':
        if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 12) {
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
