"use client";

import DatePicker from "@/components/DatePicker";
import ClassesList from "@/components/ClassesList";
import React, { useState } from "react";
import DateHeader from "@/components/DateHeader";
import { TokenProvider } from "@/context/TokenContext";
import TokenInputs from "@/components/TokenInput";

export default function Home() {
  const [date, setDate] = useState("");

  const handleDate = (date: string) => {
    setDate(date);
  };
  return (
    <TokenProvider>
      <div className="p-5">
        <TokenInputs />
        <DatePicker setDate={handleDate} />
        <DateHeader date={date} />
        <ClassesList date={date} type="Bootcamp" />
        <ClassesList date={date} type="ELearning" />
      </div>
    </TokenProvider>
  );
}
