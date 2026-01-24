

import  { useState } from "react";

export default function ProductDetailsSection({ sections }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mt-8 space-y-4">
      {sections.map((sec, idx) => (
        <div key={idx} className="border rounded shadow-sm">
          <button
            className="w-full text-left p-4 font-semibold bg-gray-100 hover:bg-gray-200"
            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
          >
            {sec.heading}
          </button>

          {openIndex === idx && (
            <div className="p-4 space-y-4">
              {sec.content.map((item, i) => {
                if (item.startsWith("http")) {
                  if (item.includes("youtube")) {
                    return (
                      <iframe
                        key={i}
                        width="100%"
                        height="315"
                        src={item}
                        title="Video"
                        frameBorder="0"
                        allowFullScreen
                        className="rounded"
                      ></iframe>
                    );
                  } else {
                    return (
                      <img
                        key={i}
                        src={item}
                        alt={`${sec.heading}-${i}`}
                        className="w-full rounded"
                      />
                    );
                  }
                }
                return <p key={i}>{item}</p>;
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
