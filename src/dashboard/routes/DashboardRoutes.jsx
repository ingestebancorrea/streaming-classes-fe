import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ClassPage } from '../pages/ClassPage'

export const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <ClassPage/> } />
        <Route path="/*" element={ <Navigate to="/"/> } />
    </Routes>
  )
}