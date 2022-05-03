import React from 'react'
import auth from '../utilities/firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const [user] = useAuthState(auth)
  let location = useLocation();
  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }
  return children;
}
