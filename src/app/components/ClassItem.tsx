"use client";

import React, { useState } from "react";
import { Attendant, Recording } from "../types";
import ProcessParticipants from "../../utils/participants";
import ClassInfo from "./ClassInfo";
import BadgeRango from "./BadgeRango";
import { useToken } from "@/context/TokenContext";
interface ClassItemProps {
  item: Recording;
  type?: string;
}

export default function ClassItem({ item, type }: ClassItemProps) {
  const [cl, setCl] = useState<Attendant[]>();
  const [open, setOpen] = useState(false);
  const [participants, setParticipants] = useState<Attendant[]>([]);

  const tokens = useToken();
  const accessToken = tokens[`token${type}`];

  const seeDetails = (id: string) => {
    setOpen(!open);
    const getClassDetails = async () => {
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

    getClassDetails().then((det) => {
      const participants = ProcessParticipants(det);
      setParticipants(participants);
      setCl(participants);
    });
  };

  return (
    <>
      <div className="max-w-xl w-full bg-gray-300 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
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
              {item.topic}
            </h3>
            <p className="text-gray-500 mt-1">{}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900">
                {participants.length} asistentes
              </p>
            </div>

            <div className="flex items-center gap-1">
              <div className="text-red-400">
                {
                  participants.filter(
                    (p) => +p.porcentajeAsistencia.slice(0, -1) < 60
                  ).length
                }{" "}
                alumno(s) permanencia &lt; 60% clase
              </div>
            </div>
          </div>

          <ClassInfo recording={item} />

          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors"
            onClick={() => seeDetails(item.meetingId)}
          >
            Ver asistencia
          </button>

          {open && cl && cl.length > 0 && (
            <table className="w-full text-sm text-gray-600">
              <thead>
                <tr>
                  <th className="text-left">#</th>
                  <th className="text-left">Apellido</th>
                  <th className="text-left">Nombre</th>
                  <th className="text-center">Permanencia</th>
                </tr>
              </thead>
              <tbody>
                {cl &&
                  cl.map((part, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{part.apellido}</td>
                      <td>{part.nombre}</td>
                      <td className="flex justify-evenly">
                        <span className="flex-end">
                          {part.porcentajeAsistencia}
                        </span>
                        <BadgeRango rango={part.rangoAsistencia} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
