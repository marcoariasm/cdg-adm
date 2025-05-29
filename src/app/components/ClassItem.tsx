"use client";

import React, { useEffect, useState } from "react";
import { useToken } from "@/context/TokenContext";
import { getAttendants } from "@/services/classes";
import ClassInfo from "./ClassInfo";
import BadgeRango from "./BadgeRango";
import { Attendant, Recording } from "../types";
import ProcessParticipants from "../../utils/participants";
// import AttendanceGraph from "./AttendanceGraph";
interface ClassItemProps {
  item: Recording;
  type?: string;
}

export default function ClassItem({ item, type }: ClassItemProps) {
  const [open, setOpen] = useState(false);
  const [participants, setParticipants] = useState<Attendant[]>([]);
  // const [attendants, setAttendants] =
  //   useState<{ fecha: string; asistentes: number }[]>();
  // const [riskAttendant, setRiskAttendant] = useState<number>();

  const tokens = useToken();
  const accessToken = tokens[`token${type}`];

  const seeDetails = () => {
    setOpen(!open);
  };

  useEffect(() => {
    getAttendants(item.meetingId, accessToken).then((resp) => {
      setParticipants(ProcessParticipants(resp));
      // setAttendant(participants.length);
      // setRiskAttendant(
      //   participants.filter((p) => +p.porcentajeAsistencia.slice(0, -1) < 60)
      //     .length
      // );
    });
  }, [item, accessToken]);

  // let datosAsistencia: any[] = [];
  // const graficarAsistencias = async () => {
  //   return await obtenerAsistencias(accessToken, date, item.meetingId);
  // };

  // graficarAsistencias().then((a) => {
  //   datosAsistencia = a;
  //   setAttendants(a);
  //   console.log("a", a);
  // });
  // console.log("Linea de asistencia", datosAsistencia);

  return (
    <>
      <div className="max-w-xl w-full bg-gray-100 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
        <div className="relative">
          <span
            className={`absolute top-2 right-2 ${
              type === "Bootcamp" ? "bg-red-500" : "bg-violet-500"
            } text-white px-3 py-1 rounded-full text-xs font-medium`}
          >
            {type}
          </span>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 pr-16">
              📘 {item.topic}
            </h3>
            <p className="text-gray-500 mt-1">{}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-lg font-bold text-gray-900">
                ⚪️ Inicio clase: {new Date(item.timeRecorded).toLocaleString()}
              </p>
              <p className="text-lg font-bold text-gray-900">
                ⏱️ Duración: {(item.durationSeconds / 3600).toFixed(0)} horas{" "}
                {((item.durationSeconds % 3600) / 60).toFixed(0)} minutos
              </p>
              <p className="text-lg font-bold text-gray-900">
                🍎 {participants.length} asistentes
              </p>
              <p className="text-lg font-bold text-red-500">
                {participants.filter(
                  (p) => +p.porcentajeAsistencia.slice(0, -1) < 60
                ).length > 0 && (
                  <>
                    🚨{" "}
                    {
                      participants.filter(
                        (p) => +p.porcentajeAsistencia.slice(0, -1) < 60
                      ).length
                    }{" "}
                    alumno(s) permanencia &lt; 60%
                  </>
                )}
                {participants.filter(
                  (p) => +p.porcentajeAsistencia.slice(0, -1) < 60
                ).length === 0 && <>✅ Sin permanencia baja</>}
              </p>
            </div>

            <div className="flex items-center">
              {/* <AttendanceGraph datos={attendants!} /> */}
            </div>
          </div>

          <ClassInfo recording={item} />

          <button
            className="w-full bg-gray-600 hover:bg-gray-800 text-white font-medium py-3 rounded-lg transition-colors"
            onClick={() => seeDetails()}
          >
            Ver asistencia
          </button>

          {open && participants && participants.length > 0 && (
            <div className="transition-all duration-3000">
              <table
                className="text-sm text-gray-600 min-w-full divide-y divide-gray-200 dark:divide-neutral-700"
                style={{ height: "{{contentHeight}}px;" }}
              >
                <thead>
                  <tr>
                    <th className="text-center uppercase w-10">#</th>
                    <th className="text-left uppercase">Apellido</th>
                    <th className="text-left uppercase">Nombre</th>
                    <th className="text-center uppercase">Permanencia</th>
                  </tr>
                </thead>
                <tbody>
                  {participants &&
                    participants.map((part, index) => (
                      <tr
                        key={index}
                        className="odd:bg-white even:bg-gray-100 h-8"
                      >
                        <td className="text-center">{index + 1}</td>
                        <td>{part.apellido}</td>
                        <td>{part.nombre}</td>
                        <td className="flex justify-evenly pt-1">
                          <span className="flex-end">
                            {part.porcentajeAsistencia}
                          </span>
                          <BadgeRango rango={part.rangoAsistencia} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
