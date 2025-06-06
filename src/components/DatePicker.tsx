"use client";

import { CalendarDaysIcon } from "@heroicons/react/16/solid";
interface DatePickerProps {
  setDate: (date: string) => void;
}

export default function DatePicker({ setDate }: DatePickerProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDate(e.target.value.split("/").join("-"));
  };

  return (
    <>
      <div className="py-4">
        <label htmlFor="fecha" className="mb-2">
          Fecha:
        </label>
        <div className="border border-gray-300 rounded-lg flex items-center justify-between px-3 py-2 w-fit">
          <input
            max={new Date().toISOString().split("T")[0]}
            id="fecha"
            type="date"
            disabled={false}
            className=""
            onChange={handleChange}
          />
          <span className="">
            <CalendarDaysIcon className="size-6 text-gray-300" />
          </span>
        </div>
      </div>
    </>
  );
}
