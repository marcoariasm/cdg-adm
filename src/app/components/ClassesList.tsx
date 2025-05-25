import React from 'react'
import { Meeting } from '../types';
import ClassItem from './ClassItem';

interface ClassesListProps {
  classes: Meeting[];
  onSelect: () => void;
}

export default function ClassesList({classes, onSelect}: ClassesListProps) {
  return (
    <ul className='flex flex-wrap gap-4'>
      {classes && classes.map((item: Meeting) => 
        <ClassItem key={item.id} id={item.id} title={item.title} onSelect={onSelect} />
      )}
    </ul>
  )
}
