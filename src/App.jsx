import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminMembers from './pages/Admin/AdminMembers'
import AdminUsers from './pages/Admin/AdminMembers'
import Admintasks from './pages/Admin/Admintasks'
// import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import Progress from './pages/User/Progress'
import Completed from './pages/User/Completed'
import Alltasks from './pages/User/Alltasks'
import Adminprojects from './pages/Admin/Adminprojects'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>

                <Route element={<UserLayout />}>
                    <Route path='/task' element={<Alltasks />} />
                    <Route path='/task/completed' element={<Completed />} />
                    <Route path='/task/progress' element={<Progress />} />
                    {/* <Route path='/task/incomplete' element={<UserDashboard />} /> */}
                </Route>

                <Route element={<AdminLayout />}>
                 <Route path='/admin/members' element={<AdminMembers />} />
                  <Route path='/admin/projects' element={<Adminprojects />} />
                   <Route path='/admin/tasks' element={<Admintasks />} />
                    </Route>

{/* 
                <Route path='*' element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;