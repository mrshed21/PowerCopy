import React from "react";

export default function Cart({ showCart, setShowCart }) {
  return (
    <div>
      <>
        {showCart && (
          <div className="fixed top-0 right-0 w-80 h-screen bg-white text-gray-800 shadow-2xl z-50 p-6">
        
            <button
              onClick={() => setShowCart(false)}
              className="text-xl absolute top-4 right-4 hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6">Kundvagn</h2>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
            >
              Fortsätt
            </button>
          </div>
        )}
      </>
    </div>
  );
}
