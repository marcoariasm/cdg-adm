"use client";

import React, { useEffect, useState } from "react";
import { Meeting } from "../types";
import ClassItem from "./ClassItem";

const token =
  "NjRiYjQxNDEtMzgxOC00ZmM0LTljMWQtNmM4OWYyZmVmNTJiMDI4YWVmNmMtNDc3_PF84_254fbc18-dec9-45c0-9f09-40ba5d1f2c06";

export default function ClassesList() {
  const [classes, setClasses] = useState<Meeting[]>([]);
  const [clase, setClase] = useState<Meeting>();

  useEffect(() => {
    const getClassDetails = async () => {
      const response = await fetch(
        "https://webexapis.com/v1/meetings?meetingType=meetingSeries&max=100",
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
      return data.items;
    };
    getClassDetails().then((cl) => setClasses(cl));
    console.log(clase);
  }, []);

  return (
    <ul className="flex flex-wrap gap-4">
      {classes &&
        classes.map((item: Meeting) => (
          <ClassItem key={item.id} clase={clase} />
        ))}
    </ul>
  );
}
