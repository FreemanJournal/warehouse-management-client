import React from 'react'

export default function HeroSection() {
  return (
    <div className="bg-amber-300" >
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          {/* <h2 className="text-white font-bold text-3xl md:text-6xl drop-shadow-md select-none">In legal trouble ?</h2> */}
          <p className="text-white md:text-2xl my-5 tracking-wider select-none">
            I’m Saul Goodman and I’ll do the fighting for you! No charge is too big for me. When legal forces have you cornered, better call Saul!
          </p>


        </div>
        <div className="flex items-center justify-center">
          <div className="h-96">
            <img
              src="/images/vegetables.png"
              alt="Walnut card tray with white powder coated steel divider and 3 punch out holes."
              className="bg-gray-100 rounded-lg w-full h-full"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
