"use client";

import React, { useEffect, useState } from "react";
import { Recording } from "../types";
import ClassItem from "./ClassItem";
import { addDays, format, parseISO, subDays } from "date-fns";

const token = process.env.NEXT_PUBLIC_WEBEX_ACCESS_TOKEN;
interface ClassesListProps {
  date: string;
}

export default function ClassesList({ date }: ClassesListProps) {
  const [classes, setClasses] = useState<Recording[]>([]);

  useEffect(() => {
    const getClassDetails = async () => {
      console.log("date", date);
      const anterior = addDays(parseISO(date), 1);
      const resultado = format(anterior, "yyyy-MM-dd");
      console.log("from_day", resultado);
      // const from = `${resultado}T19:00:00Z`;
      const from = `${date}T05:00:00Z`;
      const to = `${resultado}T04:59:59Z`;
      // const to = `${date}T18:59:59Z`;
      const response = await fetch(
        // `https://webexapis.com/v1/meetings?sessionTypes=meeting&from=${date}T00:00:00Z&to=${date}T23:59:59Z`,
        // "https://webexapis.com/v1/meetings?sessionTypes=meeting?max=100",
        `https://webexapis.com/v1/recordings?from=${from}&to=${to}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (!data) return;
      console.log(data.items);
      return data.items;
    };
    getClassDetails().then((cl) => setClasses(cl));
  }, [date]);

  return (
    <ul className="flex flex-wrap gap-4">
      {classes &&
        classes.map((item: Recording) => (
          <ClassItem key={item.meetingId} item={item} />
        ))}
    </ul>
  );
}
