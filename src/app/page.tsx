"use client";

import { Meeting } from "./types";
import DatePicker from "./components/DatePicker";
import DateHeader from "./components/DateHeader";
import ClassesList from "./components/ClassesList";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [date, setDate] = useState("");

  const handleDate = (date: string) => {
    // alert(date);
    setDate(date);
  }
  return (
    <>
      <DatePicker setDate={handleDate}/>
      {/* <DateHeader /> */}
      <ClassesList date={date}/>
    </>
  );
}
