import React from 'react'

export default function HeroSection() {
  return (
    <section className="bg-amber-300 m-3 mb-0 rounded-lg" >
     
      <div className="flex flex-col items-center justify-center  px-4 lg:px-8 py-24">
          <div className="h-96">
            <img
              src="https://i.ibb.co/QH6kn60/countdown.png"
              alt="Walnut card tray with white powder coated steel divider and 3 punch out holes."
              className="rounded-lg w-full h-full"
            />
          </div>
          <h3 className="text-slate-600 drop-shadow-xl font-mont text-center sm:text-3xl my-5 tracking-wider select-none uppercase">
          A general warehouse for the 21st century
          </h3>

        </div>
    </section>
  )
}
