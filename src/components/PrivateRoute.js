import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner/Spinner'

const PrivateRoute = ({auth}) => {
  const { loggedIn, checkingStatus} = useAuthStatus()
  
  if(checkingStatus){
    return <Spinner />
  }
    return loggedIn ? <Outlet /> : <Navigate to = '/landing' />
}

export default PrivateRoute