"use client";

import DatePicker from "./components/DatePicker";
import ClassesList from "./components/ClassesList";
import React, { useState } from "react";
import InputTkn from "./components/InputTkn";

export default function Home() {
  const [date, setDate] = useState("");
  const [tkn, setTkn] = useState();

  const handleDate = (date: string) => {
    setDate(date);
  }
  return (
    <>
      <InputTkn setTkn={setTkn} />
      <DatePicker setDate={handleDate} />
      <ClassesList date={date} tkn={tkn!} />
    </>
  );
}
