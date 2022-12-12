import React from 'react'
import userAuth from "../custom-hooks/userAuth"
import { Navigate } from 'react-router-dom';

const ProtectedRoute =({children}) => {
const {currentUser} = userAuth()

  return currentUser ? children : <Navigate TO = "login"/>
}

export default ProtectedRoute