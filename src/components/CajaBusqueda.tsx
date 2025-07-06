import React, { useState } from 'react';

const CajaBusqueda = ({
  setPalabra,
}: {
  setPalabra: (palabra: string) => void;
}) => {
  const [termino, setTermino] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    e.preventDefault();
    setTermino(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    e.preventDefault();
    setPalabra(termino);
    // const button = document.getElementById("buscar");
    // const input = document.getElementById("termino");
    // button?.setAttribute("disabled", "true");
    // input?.setAttribute("disabled", "true");
  };

  return (
    <form>
      <input
        id="termino"
        type="text"
        placeholder="Buscar término"
        className="border-1 rounded-md p-1 disabled:text-gray-500"
        value={termino}
        onChange={handleChange}
      />
      <button
        id="buscar"
        className="px-4 py-1 ml-2 text-white font-semibold rounded bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500"
        onClick={handleClick}
      >
        Buscar
      </button>
    </form>
  );
};

export default CajaBusqueda;
