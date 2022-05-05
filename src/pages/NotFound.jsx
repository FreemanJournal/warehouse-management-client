import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <main className="bg-amber-300 relative overflow-hidden h-screen border-8 border-white">
      
        <div className="container mx-auto px-6 sm:px-12 relative z-10 flex items-center py-32">
          <div className="container mx-auto px-6 flex flex-col justify-between items-center relative">
            <div className="flex w-full items-center justify-center space-x-12 flex-col sm:flex-row mb-16 sm:mb-8">
              <h1 className="font-thin text-center text-6xl text-gray-800 uppercase">
                page is not found
              </h1>
              <button className="px-3 py-2 w-32 font-light transition ease-in duration-200 uppercase hover:bg-slate-600 hover:text-white border-b text-2xl border-slate-600 focus:outline-none" onClick={()=>navigate("/")}>
                Home
              </button>
            </div>
          
          </div>
        </div>
      </main>

    </>
  )
}
