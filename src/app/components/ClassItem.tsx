"use client";

import React, { useEffect, useState } from "react";
import { Meeting, Participant } from "../types";

const meetingId = "3451d53a0e814ec68ea3aba331673009";
const token =
  "NjRiYjQxNDEtMzgxOC00ZmM0LTljMWQtNmM4OWYyZmVmNTJiMDI4YWVmNmMtNDc3_PF84_254fbc18-dec9-45c0-9f09-40ba5d1f2c06";

export default function ClassItem({item}: {item: Meeting}) {

  const [cl, setCl] = useState<Participant[]>();

  const seeDetails = (id: string) => {
    alert(id);
    const getClassDetails = async () => {
      const response = await fetch(
      `https://webexapis.com/v1/meetingParticipants?meetingId=${id}`,
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
    }

    getClassDetails().then(det => setCl(det))
  }
 
  return (
    <>
    <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
      <div className="relative">
        {/* <img
          src="https://placehold.co/400x300"
          alt="Product"
          className="w-full h-52 object-cover"
        /> */}
        <span className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          {item.hostDisplayName.split(" ")[0]}
        </span>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
          <p className="text-gray-500 mt-1">{}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-gray-900">82% asistencia</p>
            {/* <p className="text-sm text-gray-500 line-through">$69.99</p> */}
          </div>

          <div className="flex items-center gap-1">
            <div className="text-yellow-400">★★★★</div>
            <div className="text-gray-300">★</div>
            <span className="text-sm text-gray-600 ml-1">(42)</span>
          </div>
        </div>

        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors"
          onClick={() => seeDetails(item.id)}
        >
          Ver detalle
        </button>
      </div>
    </div>
    {/* details */}
    {
      cl && cl.length > 0 && (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
      <div className="p-5 space-y-4">
        {cl && cl.map(part => (
          <p className="text-sm text-gray-600 ml-1">{part.displayName}</p>
          ))}
      </div>
    </div>
      )
    }
    </>
  );
  // };
}
