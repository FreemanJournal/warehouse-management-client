import { Disclosure } from '@headlessui/react'
import { signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BsList, BsListNested } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import auth from '../../utilities/firebase.init'



export default function Navbar() {
  const [user] = useAuthState(auth)
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  useEffect(() => user ? setShow(true) : setShow(false), [user])

  const menu = [
    { name: 'Home', href: '/', current: true },
    { name: 'Manage Inventories', href: '/manageInventory', current: true },
    { name: 'Add Items', href: '/addItems', current: true },
    { name: 'My Items', href: '/myItems', current: true },
    { name: 'Log In', href: '/logIn', current: !show },
    { name: 'Register', href: '/register', current: !show },
    // { name: 'Log Out', href: '/logIn', current: !show },
  ]

  return (
    <section className="absolute inset-0 top-3">
      <Disclosure as="nav" className="bg-transparent">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                  {/* Mobile menu open and close button*/}
                <div className="absolute mt-10 right-0 flex items-center md:hidden">
                  <Disclosure.Button className="p-2 rounded-md text-slate-800  focus:outline-none">
                    {open ? (
                      <BsListNested className="block h-6 w-6"  />
                    ) : (
                      <BsList className="block h-6 w-6" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Desktop Menu */}
                <div className=" flex-1 flex items-center justify-center md:items-stretch md:justify-between mt-10">
                  <div className="flex-shrink-0 flex items-center">
                    <h1 className='text-slate-600 drop-shadow-lg uppercase text-2xl tracking-wide font-mont font-bold cursor-pointer' onClick={() => navigate('/')} >The green warehouse</h1>
                  </div>
                  <div className="hidden md:block md:ml-6">
                    <div className="flex space-x-4 my-5">
                      {menu.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          style={({ isActive }) => isActive ? { color: "#242B2E" } : { color: "" }}
                          className={`${item.current ? 'block' : "hidden"} bg-transparent uppercase font-mont  cursor-pointer text-slate-500  hover:text-slate-800 px-3 py-2 rounded-md text-base font-medium`}

                        >
                          {item.name}
                        </NavLink>
                      ))}
                      {/* Log Out */}
                      {/* {user && <button
                        className='bg-transparent  cursor-pointer text-slate-400  hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium'
                        onClick={() => signOut(auth)}
                      >
                        Logout
                      </button>} */}
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* Dropdown Menu */}
            <Disclosure.Panel className="">
              <div className="px-2 py-3 rounded-md ">
                {menu.map((item) => {
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as={NavLink}
                      to={item.href}
                      style={{borderBottom:"1px solid #758283"}}
                      className={`${item.current ? 'block' : "hidden"} bg-slate-700 cursor-pointer uppercase font-mont text-white  hover:bg-slate-600 px-3 py-2 first:rounded-t-md last:rounded-b-md  text-base font-medium text-center`}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )
                })}
                {/* Log Out */}
                {/* {user && <button
                  className='w-full bg-transparent border cursor-pointer text-slate-500 hover:bg-gray-200 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium'
                  onClick={() => signOut(auth)}
                >
                  Logout
                </button>} */}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </section>
  )
}
