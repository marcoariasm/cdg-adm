"use client";

import React, { useEffect, useState } from "react";
import { Recording } from "../types";
import ClassItem from "./ClassItem";
import { useToken } from "@/context/TokenContext";
import { getRecordings } from "@/services/classes";
interface ClassesListProps {
  date: string;
  type?: string;
}

export default function ClassesList({ date, type }: ClassesListProps) {
  const [classes, setClasses] = useState<Recording[]>([]);

  const tokens = useToken();
  const accessToken = tokens[`token${type}`];

  useEffect(() => {
    if (!date || !accessToken) return;
    getRecordings(accessToken, date).then((recordings) => {
      if (!recordings) return;
      setClasses(recordings);
    });
  }, [date, accessToken]);

  return (
    <ul className="flex flex-wrap gap-4 my-5">
      {classes &&
        classes.map((item: Recording, index) => (
          <ClassItem key={index} item={item} type={type} date={date} />
        ))}
      {!classes.length && (
        <li className="w-full text-gray-500 my-5">
          No hay clases grabadas de {type} para esta fecha.
        </li>
      )}
    </ul>
  );
}
