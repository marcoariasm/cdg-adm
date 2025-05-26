// `https://webexapis.com/v1/meetings?meetingType=scheduledMeeting&from=${from}&to=${to}`,
"use client";

import {
  CalendarDaysIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/16/solid";

interface DatePickerProps {
  setDate: (date: string) => void;
}

export default function DatePicker({ setDate }: DatePickerProps) {
  const handleChange = (e: any) => {
    e.preventDefault();
    setDate(e.target.value.split("/").join("-"));
  };

  return (
    <>
      {/* <LabelForm label='Indica la fecha de la reserva' htmlFor='date' error={errors.date?.message}> */}
      <div className="">
        <div className="">
          <label htmlFor="fecha" className="">
            Fecha:
          </label>
        </div>
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
        <div className="mb-4 mt-2">
          Selecciona una fecha para mostrar las grabaciones
        </div>
        {/* <div role="alert" className="text-red-500 flex gap-2 items-center">
          <ExclamationTriangleIcon className="size-5" /> error
        </div> */}
      </div>
    </>
  );
}
