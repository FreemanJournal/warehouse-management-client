import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Registration from '../components/Authentication/Registration'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { GlobalContext } from '../context/GlobalContext';
import auth from '../utilities/firebase.init';
import Loader from '../utilities/Loader';

export default function RegistrationPage() {
  const [user, loading, error] = useAuthState(auth);

  // Redirect
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    // createToken(user)
    let from = location.state?.from?.pathname || "/";
    user && navigate(from, { replace: true })
  }, [user])

  const { isLoading } = useContext(GlobalContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  if (isLoading) {
    return <Loader isLoading={isLoading} />
  }

  return (
    <>
      <Navbar />
      <Registration />
      <Footer />


    </>
  )
}
