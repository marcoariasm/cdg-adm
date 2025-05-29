function processParticipants(json) {
  const participantes = json;

  // 1. Determinar tiempo total de clase (host o el mayor leftTime)
  const host = participantes.find(
    (p) => p.email === "codigo_centro_doc02@tecsup.edu.pe"
  );
  const startTime = new Date(
    host?.meetingStartTime || participantes[0].joinedTime
  );
  const endTime = new Date(
    Math.max(...participantes.map((p) => new Date(p.leftTime).getTime()))
  );
  const duracionClase = (endTime - startTime) / 1000; // en segundos

  // 2. Agrupar asistentes por email
  const asistentes = {};

  participantes.forEach((p) => {
    if (p.displayName === "Bootcamp CodiGo") return;
    const email = p.displayName;

    if (!asistentes[email]) {
      asistentes[email] = {
        id: p.id,
        nombre: p.displayName.split(" ")[0],
        apellido: p.displayName.split(" ")[1],
        correo: email,
        joinedTime: new Date(p.joinedTime),
        leftTime: new Date(p.leftTime),
        duracionTotal: (new Date(p.leftTime) - new Date(p.joinedTime)) / 1000,
      };
    } else {
      // Actualizar joinedTime si es anterior
      if (new Date(p.joinedTime) < asistentes[email].joinedTime) {
        asistentes[email].joinedTime = new Date(p.joinedTime);
      }
      // Actualizar leftTime si es posterior
      if (new Date(p.leftTime) > asistentes[email].leftTime) {
        asistentes[email].leftTime = new Date(p.leftTime);
      }
      // Acumular tiempo
      asistentes[email].duracionTotal +=
        (new Date(p.leftTime) - new Date(p.joinedTime)) / 1000;
    }
  });

  // 3. Convertir en array con % asistencia
  let resultado = Object.values(asistentes).map((a) => {
    let porcentaje = ((a.duracionTotal / duracionClase) * 100).toFixed(1);
    if (porcentaje > 100) porcentaje = 100;
    // const porcentajeNumerico = porcentaje.toFixed(1);
    let rango = "";

    if (porcentaje < 31) rango = "Baja";
    else if (porcentaje < 81) rango = "Media";
    else rango = "Alta";

    return {
      id: a.id,
      nombre: a.nombre,
      apellido: a.apellido,
      correo: a.correo,
      joinedTime: a.joinedTime.toISOString(),
      leftTime: a.leftTime.toISOString(),
      duracionAsistenciaSeg: Math.round(a.duracionTotal),
      porcentajeAsistencia: `${porcentaje}%`,
      rangoAsistencia: rango,
    };
  });

  // 4. Ordenar alfabéticamente por primer apellido
  resultado
    // .filter((r) => r.correo !== "codigo_centro_doc02@tecsup.edu.pe")
    .sort(
      (a, b) => {
        try {
          return a.apellido.localeCompare(b.apellido);
        } catch (error) {
          return error;
        }
      }
      // parseFloat(b.porcentajeAsistencia) - parseFloat(a.porcentajeAsistencia)
    );

  console.log(resultado);
  return resultado;
}

export default processParticipants;
