import React, { useContext, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Helmet } from 'react-helmet-async'
import { useLocation, useNavigate } from 'react-router-dom'
import LoginForm from '../components/Authentication/LoginForm'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { GlobalContext } from '../context/GlobalContext'
import auth from '../utilities/firebase.init'
import Loader from '../utilities/Loader'

export default function LoginPage() {
  const [user, loading, error] = useAuthState(auth);
  const { isLoading } = useContext(GlobalContext)


  // Redirect
  const location = useLocation()
  let navigate = useNavigate();
  useEffect(() => {
    let from = location.state?.from?.pathname || "/";
    user && navigate(from, { replace: true })
  }, [user])


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (isLoading || loading) {
    return <Loader isLoading={isLoading} />
  }

  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <Navbar />
      <LoginForm />
      <Footer />
    </>
  )
}
