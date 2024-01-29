import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import style from '../css/PersonalDataSettings.module.css';
import '../css/style.css';

interface DataInputProps {
  date: Date | null;
  showCalendar: boolean;
  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
  onChange: any;
}

const DataInput: React.FC<DataInputProps> = ({
  date,
  showCalendar,
  setShowCalendar,
  onChange,
}) => {
  return (
    <div className={`${style.input_box} ${style.data_text}`}>
      <input
        type="text"
        value={date ? date.toLocaleDateString() : ''} // Отображает дату в текстовом поле
        onClick={() => setShowCalendar(true)} // Показывает календарь при клике на input
        placeholder="Дата рождения"
      />
      {showCalendar && (
        <Calendar
          onChange={onChange}
          value={date}
          onClickDay={() => setShowCalendar(false)} // Закрывает календарь при выборе даты
        />
      )}
    </div>
  );
};

export default DataInput;
