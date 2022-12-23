import React from 'react'
import useAuth from '../custom-hook/useAuth'
import { Navigate } from 'react-router-dom'

const ProductRoute = ({children}) => {
     const {currentUser} = useAuth()
  return currentUser ? children :  <Navigate to="login"/>
}

export default ProductRoute