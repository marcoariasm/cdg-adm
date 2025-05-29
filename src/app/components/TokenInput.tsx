import { useToken } from "@/context/TokenContext";
import { useState } from "react";

export default function TokenInputs() {
  const [bloqueado, setBloqueado] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = () => {
    if (tokenBootcamp.trim() && tokenELearning.trim()) {
      setBloqueado(true);
      setMensaje("✅ Tokens ingresados con éxito");
    } else {
      setMensaje("⚠️ Por favor ingresa ambos tokens.");
    }
  };
  const { tokenBootcamp, tokenELearning, setTokenBootcamp, setTokenELearning } =
    useToken();

  return (
    <>
      <div className="flex space-y-4 space-x-3 mb-2">
        <div>
          <label className="block font-semibold mb-1">
            Token de Bootcamps (codigo)
          </label>
          <input
            type="password"
            value={tokenBootcamp}
            onChange={(e) => setTokenBootcamp(e.target.value)}
            className="w-96 border px-3 py-1"
            placeholder="Token para Bootcamps"
            disabled={bloqueado}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">
            Token de Elearning (tecsup)
          </label>
          <input
            type="password"
            value={tokenELearning}
            onChange={(e) => setTokenELearning(e.target.value)}
            className="w-96 border px-3 py-1"
            placeholder="Token para Elearning"
            disabled={bloqueado}
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        disabled={bloqueado}
        className={`px-4 py-2 text-white font-semibold rounded ${
          bloqueado
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {bloqueado ? "Tokens bloqueados" : "Ingresar tokens"}
      </button>

      {mensaje && <p className="mt-2 text-sm text-green-700">{mensaje}</p>}
    </>
  );
}
