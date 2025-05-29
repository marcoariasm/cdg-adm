export default function BadgeRango({ rango }: { rango: string }) {
  let colorClass = "";
  if (rango === "Baja") {
    colorClass = "bg-red-600 py-1 px-2 min-w-12 text-white";
  } else if (rango === "Media") {
    colorClass = "bg-yellow-300 py-1 px-2 min-w-12 text-black";
  } else if (rango === "Alta") {
    colorClass = "bg-green-600 py-1 px-2 min-w-12 text-white";
  }

  return (
    <span
      className={`rounded-full text-[10px] font-medium text-center ${colorClass}`}
    >
      {rango}
    </span>
  );
}
