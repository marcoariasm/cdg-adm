import { subDays, format, addDays, parseISO } from 'date-fns';

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


export { getAttendants, getRecordings, obtenerAsistencias };