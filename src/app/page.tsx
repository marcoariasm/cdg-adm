import { Meeting } from "./types";
import DatePicker from "./components/DatePicker";
import DateHeader from "./components/DateHeader";
import ClassesList from "./components/ClassesList";
import React, { useState, useEffect } from 'react';

// import Image from "next/image";
const token =
"NjRiYjQxNDEtMzgxOC00ZmM0LTljMWQtNmM4OWYyZmVmNTJiMDI4YWVmNmMtNDc3_PF84_254fbc18-dec9-45c0-9f09-40ba5d1f2c06";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [classes, setClasses] = useState<Meeting[]>([] as Meeting[]);

  let data: {items: Meeting[]} = {items: []};
  // let items: Meeting[] = [];

  // const fecha = '2024-05-18';
  // const from = `${fecha}T00:00:00Z`;
  // const to = `${fecha}T23:59:59Z`;
  
  const getMeetings = async () => {
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
    data = await response.json();
    if (!data) return;
    console.log(data);
    return data.items;
    // setClasses(data.items);
  };

  const array = await getMeetings()
  // await getMeetings().then((res: any) => {
  //   if (!res) return;
  //   console.log(res);
  // });

  // useEffect(() => {
  //   const getClasses = async () => {
  //     const isoDate = selectedDate.toISOString().split('T')[0];
  //     console.log("buscando clases para", isoDate);
  //     const response = await fetch(`https://webexapis.com/v1/meetings?from${isoDate}=&to=${isoDate}&meetingType=scheduledMeeting&state=scheduled&max=100`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     const data = await response.json();
  //     console.log('d:', data);
  //   }

  //   getClasses();

  // }, [selectedDate])

  const handleSelect = (id: string) => {
    console.log(id);
  }

  return (
    <>
    <DatePicker />
    <DateHeader />
    <ClassesList classes={classes} onSelect={() => {}}/>
    </>
  );
}
