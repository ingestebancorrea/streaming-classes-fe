import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ClassroomPage, ProjectPage, ProjectRegisterPage } from '../pages'

export const ClassroomRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <ClassroomPage/> } />
        <Route path="/projects" element={ <ProjectPage/> } />
        <Route path="/project/register" element={ <ProjectRegisterPage/> } />
        <Route path="/*" element={ <Navigate to="/"/> } />
    </Routes>
  )
}