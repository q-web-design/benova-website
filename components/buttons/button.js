import React from "react";

export default function Button({ text }) {
  return (
    <button className="bg-white text-primary w-full py-4 rounded-md font-semibold text-lg">
      {text}
    </button>
  );
}
