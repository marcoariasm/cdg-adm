import { useState } from "react";
import { Recording } from "../types";

interface ClassInfoProps {
  recording: Recording;
}

export default function ClassInfo({ recording }: ClassInfoProps) {
  const [copiado, setCopiado] = useState(false);

  // ⏱️ Duración: ${(recording.durationSeconds / 60).toFixed(1)} minutos
  const copiarAlPortapapeles = () => {
    const texto = `
:loudspeaker: @here :loudspeaker:
### ${recording.topic}

📅 Fecha: ${new Date(recording.timeRecorded).toLocaleString()}
▶️ Enlace: [${recording.playbackUrl}](${recording.playbackUrl})
🔑 Contraseña: ${recording.password}
    `.trim();

    navigator.clipboard.writeText(texto).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm border-gray-300">
      <h3 className="text-lg font-semibold mb-2 text-gray-500">
        {recording.topic}
      </h3>
      <p className="text-sm text-gray-500">
        Grabado el: {new Date(recording.timeRecorded).toLocaleString()}
      </p>
      <p className="text-sm text-gray-500">
        Duración: {(recording.durationSeconds / 60).toFixed(1)} minutos
      </p>
      <p className="text-sm text-gray-500">Password: {recording.password}</p>
      <p className="text-sm text-blue-500 underline mb-2">
        <a
          href={recording.playbackUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver grabación
        </a>
      </p>

      <button
        onClick={copiarAlPortapapeles}
        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
      >
        {copiado ? "Copiado ✅" : "Copiar al portapapeles"}
      </button>
    </div>
  );
}
