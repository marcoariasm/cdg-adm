import React, { useState } from 'react';

import { useToken } from '@/context/TokenContext';

import ClassesList from './ClassesList';
import DateHeader from './DateHeader';
import DatePicker from './DatePicker';

const Cursos = () => {
  const [date, setDate] = useState<string>("");

  const handleDate = (date: string) => {
    setDate(date);
  };

  const {} = useToken();

  return (
    <>
      <DatePicker setDate={handleDate} />
      {date && (
        <>
          <DateHeader date={date} />
          <ClassesList date={date} type="Bootcamp" />
          <ClassesList date={date} type="ELearning" />
        </>
      )}
    </>
  );
};

export default Cursos;
