import React from "react";

export default function Textarea({ label }) {
  return (
    <div className="w-full">
      <p className="text-white px-2">{label}</p>
      <textarea 
        className="rounded-md py-4 w-full px-3 bg-secondary text-white focus:outline-none resize-none border-none"
        rows={5}
        >
      </textarea>
    </div>
  );
}
