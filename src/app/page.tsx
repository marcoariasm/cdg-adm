import { Meeting } from "./types";
import DatePicker from "./components/DatePicker";
import DateHeader from "./components/DateHeader";
import ClassesList from "./components/ClassesList";
import React, { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <DatePicker />
      <DateHeader />
      <ClassesList />
    </>
  );
}
