
import { useEffect } from "react";

export default function Filters({ open, setOpen }) {

useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "auto";
}, [open]);


  return (
    <div className="relative z-50">
     

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-4 border-b flex justify-between">
          <h2 className="font-semibold">Filters</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="p-4 space-y-4">
          <label className="flex gap-2">
            <input type="checkbox" />
            Category A
          </label>

          <label className="flex gap-2">
            <input type="checkbox" />
            Category B
          </label>
        </div>
      </aside>
    </div>
  );
}
