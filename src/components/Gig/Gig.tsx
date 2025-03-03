import React from "react";

interface GigProps {
  titulo: string;
  fecha: string;
  lugar: string;
}

const Gig: React.FC<GigProps> = ({ titulo, fecha, lugar }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white grid gap-4">
      <h2 className="text-xl font-bold">{titulo}</h2>
      <p className="text-gray-600">{fecha}</p>
      <p className="text-gray-500">{lugar}</p>
    </div>
  );
};

export default Gig;
