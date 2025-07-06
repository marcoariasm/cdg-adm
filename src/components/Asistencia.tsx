import React, { useState } from 'react';

import Asistencias from './Asistencias';
import CajaBusqueda from './CajaBusqueda';
import DateHeader from './DateHeader';
import DatePicker from './DatePicker';

const Asistencia = () => {
  const [inicio, setInicio] = useState("");
  const [fin, setFin] = useState("");
  const [palabra, setPalabra] = useState("");

  const handleInicio = (inicio: string) => {
    setInicio(inicio);
  };
  const handleFin = (fin: string) => {
    setFin(fin);
  };

  const handlePalabra = (palabra: string) => {
    setPalabra(palabra);
  };

  return (
    <div>
      <DatePicker setDate={handleInicio} />
      <DatePicker setDate={handleFin} />
      <CajaBusqueda setPalabra={handlePalabra} />
      {palabra && (
        <>
          <DateHeader date={inicio} />
          <DateHeader date={fin} />
          <Asistencias
            type="Bootcamp"
            date={inicio}
            dateEnd={fin}
            topic={palabra}
          />
          <Asistencias
            type="ELearning"
            date={inicio}
            dateEnd={fin}
            topic={palabra}
          />
        </>
      )}
    </div>
  );
};

export default Asistencia;
