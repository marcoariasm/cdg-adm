"use client";

import React, { useEffect, useState } from "react";
import { Recording } from "../types";
import ClassItem from "./ClassItem";
import { addDays, format, parseISO } from "date-fns";
import { useToken } from "@/context/TokenContext";
interface ClassesListProps {
  date: string;
  type?: string;
}

export default function ClassesList({ date, type }: ClassesListProps) {
  const [classes, setClasses] = useState<Recording[]>([]);

  const tokens = useToken();
  const accessToken = tokens[`token${type}`];

  useEffect(() => {
    const getClassDetails = async () => {
      // console.log("date", date);
      const anterior = addDays(parseISO(date), 1);
      const resultado = format(anterior, "yyyy-MM-dd");
      // console.log("from_day", resultado);
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
      if (!data) return;
      console.log(data.items);
      return data.items;
    };
    getClassDetails().then((cl) => setClasses(cl));
  }, [date, accessToken]);

  return (
    <ul className="flex flex-wrap gap-4 my-5">
      {classes &&
        classes.map((item: Recording) => (
          <ClassItem key={item.meetingId} item={item} type={type} />
        ))}
    </ul>
  );
}
