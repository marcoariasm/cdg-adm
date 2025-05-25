"use client";

import React, { useEffect, useState } from "react";
import { Meeting } from "../types";
import ClassItem from "./ClassItem";

const token =
  "NjRiYjQxNDEtMzgxOC00ZmM0LTljMWQtNmM4OWYyZmVmNTJiMDI4YWVmNmMtNDc3_PF84_254fbc18-dec9-45c0-9f09-40ba5d1f2c06";

interface ClassesListProps {
  date: string;
}

export default function ClassesList({date}: ClassesListProps) {
  const [classes, setClasses] = useState<Meeting[]>([]);
  // const [clase, setClase] = useState<Meeting>();

  useEffect(() => {
    const getClassDetails = async () => {
      const response = await fetch(
        `https://webexapis.com/v1/meetings?sessionTypes=meeting&from=${date}T00:00:00Z&to=${date}T23:59:59Z`,
        // "https://webexapis.com/v1/meetings/sessionTypes?max=100",
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
        classes.map((item: Meeting) => (
          <ClassItem key={item.id} item={item} />
        ))}
    </ul>
  );
}
