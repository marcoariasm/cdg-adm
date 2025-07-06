import React from 'react';

interface Props {
  setSearch: (menu: string) => void;
}

const SearchMenu = ({ setSearch }: Props) => {
  return (
    <div className="flex gap-2 justify-start my-6">
      <button
        className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
        onClick={() => setSearch("cursos")}
      >
        🎥 Cursos
      </button>
      <button
        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        onClick={() => setSearch("clases")}
      >
        📊 Clases
      </button>
      <button
        className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition"
        onClick={() => setSearch("asistencia")}
      >
        ✅ Asistencia
      </button>
    </div>
  );
};

export default SearchMenu;
