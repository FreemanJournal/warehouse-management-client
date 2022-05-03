import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Registration from '../components/Authentication/Registration'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import auth from '../utilities/firebase.init';

export default function RegistrationPage() {
  const [user, loading, error] = useAuthState(auth);

  // Redirect

  const location = useLocation()
  let navigate = useNavigate();
  useEffect(() => {
    let from = location.state?.from?.pathname || "/";
    user && navigate(from, { replace: true })
  }, [user])
  
  return (
    <>
    <Navbar/>
    <Registration/>
    <Footer/>

   
    </>
  )
}
