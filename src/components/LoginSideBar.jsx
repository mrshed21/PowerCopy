import React from 'react'

export default function LoginSideBar({ setShowLogin, showLogin }) {
  return (
    <>
      {showLogin && (
          <div className="fixed top-0 right-0 w-80 h-screen bg-white text-gray-800 shadow-2xl z-50 p-6">
            {/* Close */}
            <button
              onClick={() => setShowLogin(false)}
              className="text-xl absolute top-4 right-4 hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6">Logga in</h2>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
              >
                Logga in
              </button>
            </form>
          </div>
        )}
    </>
  )
}
