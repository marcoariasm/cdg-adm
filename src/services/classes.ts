import { addDays, eachDayOfInterval, format, parseISO, subDays } from 'date-fns';

import { Recording } from '@/app/types';

const getAttendants = async (id: string, accessToken: string) => {
  const response = await fetch(
    `https://webexapis.com/v1/meetingParticipants?meetingId=${id}&max=50`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const data = await response.json();

  return data.items;
};

const getRecordings = async (accessToken: string, date: string) => {
  const posterior = addDays(parseISO(date), 1);
  const resultado = format(posterior, "yyyy-MM-dd");

  const from = `${date}T05:00:00Z`;
  const to = `${resultado}T04:59:59Z`;
  const response = await fetch(
    `https://webexapis.com/v1/recordings?from=${from}&to=${to}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const data = await response.json();
  return data.items;
}

const getRecordingsByRangeAndTopic = async (accessToken: string, begin: string, end: string, topic: string) => {
  const posterior = addDays(parseISO(end), 1);
  const sumado = format(posterior, "yyyy-MM-dd");

  const from = `${begin}T05:00:00Z`;
  const to = `${sumado}T04:59:59Z`;
  const response = await fetch(
    `https://webexapis.com/v1/recordings?from=${from}&to=${to}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const terms = topic
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  const data = await response.json();

  const grabacionesFiltradas = terms.length > 0
    ? data.items.filter((item: Recording) => {
      const topicLower = item.topic.toLowerCase();
      return terms.every(term => topicLower.includes(term));
    })
    : data.items;
  return grabacionesFiltradas;
}


const obtenerAsistencias = async (accessToken: string, date: string, id: string) => {
  const hoy = new Date(date);
  const dias = Array.from({ length: 15 }, (_, i) => subDays(hoy, 14 - i));

  const resultados = [];

  for (const fecha of dias) {
    const diaStr = format(fecha, 'yyyy-MM-dd');
    const from = `${diaStr}T00:00:00Z`;
    const to = `${diaStr}T23:59:59Z`;

    const url = `https://webexapis.com/v1/meetingParticipants?meetingId=${id}&from=${from}&to=${to}&max=100`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      console.error(`Error en ${diaStr}`);
      resultados.push({ fecha: diaStr, asistentes: 0 });
      continue;
    }

    const data = await res.json();

    // Contar alumnos únicos por email (evitar duplicados)
    const emailsUnicos = new Set();
    for (const p of data.items || []) {
      if (!p.host && p.email) {
        emailsUnicos.add(p.email);
      }
    }

    resultados.push({ fecha: diaStr, asistentes: emailsUnicos.size });
  }

  return resultados;
}

const obtenerAsistenciasPorTopic = async (accessToken: string, date: string, dateEnd: string, topic: string) => {
  const posterior = addDays(parseISO(dateEnd), 1);
  const sumado = format(posterior, "yyyy-MM-dd");

  const from = `${date}T05:00:00Z`;
  const to = `${sumado}T04:59:59Z`;

  const dias = eachDayOfInterval({
    start: parseISO(from),
    end: parseISO(to),
  });

  const resultado = [];

  for (const dia of dias) {
    const desde = format(dia, 'yyyy-MM-dd');
    const hasta = format(dia, 'yyyy-MM-dd');

    // 1. Obtener grabaciones del día
    const recordingsRes = await fetch(
      `https://webexapis.com/v1/recordings?from=${desde}&to=${hasta}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const recordingsData = await recordingsRes.json();

    const terms = topic
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .join('')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reunionesFiltradas = (recordingsData.items || []).filter((r: any) =>
      r.topic.toLowerCase().includes(terms.toLowerCase())
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const asistenciasDelDia: any[] = [];

    // 2. Para cada reunión de ese día
    for (const reunion of reunionesFiltradas) {
      const meetingId = reunion.meetingId;

      const participantesRes = await fetch(
        `https://webexapis.com/v1/meetingParticipants?meetingId=${meetingId}&from=${desde}&to=${hasta}&max=100`,
        {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
      );

      const participantesData = await participantesRes.json();

      console.log(participantesData);

      if (Array.isArray(participantesData.items)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        participantesData.items.forEach((p: any) => {
          const joined = new Date(p.joinTime);
          const left = new Date(p.leaveTime);
          const duracion = (left.getTime() - joined.getTime()) / 1000;

          asistenciasDelDia.push({
            nombre: p.name || '',
            correo: p.email || '',
            joinedTime: p.joinTime,
            leftTime: p.leaveTime,
            duracionSeg: Math.round(duracion),
            topic: reunion.topic,
            fecha: desde,
          });
        });
      }
    }

    resultado.push({
      fecha: desde,
      totalAsistencias: asistenciasDelDia.length,
      asistencias: asistenciasDelDia,
    });
  }

  return resultado;
}


export { getAttendants, getRecordings, obtenerAsistencias, getRecordingsByRangeAndTopic, obtenerAsistenciasPorTopic };