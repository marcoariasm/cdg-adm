"use client";

import React from 'react';

import { useToken } from '@/context/TokenContext';
import { obtenerAsistenciasPorTopic } from '@/services/classes';

interface ClassesListProps {
  date: string;
  dateEnd?: string;
  type?: string;
  topic?: string;
}

export default function Asistencias({
  date,
  dateEnd = new Date().toString().split("T")[0],
  type = "Bootcamp",
  topic = "30-05",
}: ClassesListProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const [setClasses] = useState<any[]>([]);
  // const [setLoading] = useState(false);

  const tokens = useToken();
  const accessToken = tokens[`token${type}`];

  const handleBuscar = async () => {
    try {
      const data = await obtenerAsistenciasPorTopic(
        accessToken,
        date,
        dateEnd,
        topic
      );
      console.log(data);
      // setClasses(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    } finally {
      // setLoading(false);
    }
  };

  handleBuscar();

  return <ul className="flex flex-wrap gap-4 my-5"></ul>;
}
