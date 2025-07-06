"use client";

import React, { useEffect, useState } from 'react';

import { useToken } from '@/context/TokenContext';
import { getRecordings, getRecordingsByRangeAndTopic } from '@/services/classes';

import { Recording } from '../app/types';
import ClassItem from './ClassItem';

interface ClassesListProps {
  date: string;
  dateEnd?: string;
  type?: string;
  topic?: string;
}

export default function ClassesList({
  date,
  dateEnd = new Date().toString().split("T")[0],
  type = "Bootcamp",
  topic,
}: ClassesListProps) {
  const [classes, setClasses] = useState<Recording[]>([]);

  const tokens = useToken();
  const accessToken = tokens[`token${type}`];

  useEffect(() => {
    if (!date || !accessToken) return;
    if (dateEnd && topic) {
      getRecordingsByRangeAndTopic(accessToken, date, dateEnd, topic).then(
        (recording) => {
          if (!recording) return;
          console.log(recording);
          setClasses(recording);
        }
      );
    } else {
      getRecordings(accessToken, date).then((recordings) => {
        if (!recordings) return;
        setClasses(recordings);
      });
    }
  }, [date, dateEnd, topic, type, accessToken]);

  return (
    <ul className="flex flex-wrap gap-4 my-5">
      {classes &&
        classes.map((item: Recording, index) => (
          <ClassItem key={index} item={item} type={type} />
        ))}
      {!classes.length && (
        <li className="w-full text-gray-500 my-5">
          No hay clases grabadas de {type} para esta fecha.
        </li>
      )}
    </ul>
  );
}
