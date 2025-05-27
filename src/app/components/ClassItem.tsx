"use client";

import React, { useState } from "react";
import { Attendant, Recording } from "../types";
import ProcessParticipants from "../../utils/participants";
import ClassInfo from "./ClassInfo";
import BadgeRango from "./BadgeRango";

const token = process.env.NEXT_PUBLIC_WEBEX_ACCESS_TOKEN;

interface ClassItemProps {
  item: Recording;
  tkn: string;
}

export default function ClassItem({ item, tkn="MjBiZDIzMjUtMjU0Mi00MTNlLWE3ZjgtN2ZmODkwZDMzMjBlZmU2NzY5Y2UtYWQ1_PF84_254fbc18-dec9-45c0-9f09-40ba5d1f2c06" }: ClassItemProps) {
  const [cl, setCl] = useState<Attendant[]>();
  const [open, setOpen] = useState(false);
  const [participants, setParticipants] = useState<Attendant[]>([]);

  const seeDetails = (id: string) => {
    setOpen(!open);
    const getClassDetails = async () => {
      const response = await fetch(
        `https://webexapis.com/v1/meetingParticipants?meetingId=${id}&max=50`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data.items);
      return data.items;
    };

    getClassDetails().then((det) => {
      const participants = ProcessParticipants(det);
      setParticipants(participants);
      setCl(participants);
      console.log(ProcessParticipants(det));
    });
  };

  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
        <div className="relative">
          {/* <img
          src="https://placehold.co/400x300"
          alt="Product"
          className="w-full h-52 object-cover"
        /> */}
          <span className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            {/* {item.hostDisplayName.split(" ")[0]} */}
            displayName
          </span>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{item.topic}</h3>
            <p className="text-gray-500 mt-1">{}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900">
                {participants.length} asistentes
              </p>
              {/* <p className="text-sm text-gray-500 line-through">$69.99</p> */}
            </div>

            <div className="flex items-center gap-1">
              <div className="text-red-400">
                {
                  participants.filter(
                    (p) => +p.porcentajeAsistencia.slice(0, -1) < 60
                  ).length
                }{" "}
                alumno(s) riesgo abandono (permanencia menor al 60%)
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
            // <div className="p-5 space-y-4">
            <table className="w-full text-sm text-gray-600">
              <thead>
                <tr>
                  <th className="text-left">#</th>
                  <th className="text-left">Apellido</th>
                  <th className="text-left">Nombre</th>
                  <th className="text-left">Permanencia</th>
                  <th className="text-left">Rango</th>
                </tr>
              </thead>
              <tbody>
                {cl &&
                  cl.map((part, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{part.apellido}</td>
                      <td>{part.nombre}</td>
                      <td>{part.porcentajeAsistencia}</td>
                      <td>
                        <BadgeRango rango={part.rangoAsistencia} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            // </div>
          )}
        </div>
      </div>
    </>
  );
}
