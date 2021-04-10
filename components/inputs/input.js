import React from "react";

export default function Input({ label }) {
  return (
    <div className="w-full">
      <p className="text-white px-2">{label}</p>
      <input 
      className="rounded-md py-4 w-full px-3 bg-secondary text-white focus:outline-none"/>
    </div>
  );
}
