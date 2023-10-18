import React from 'react'
import Sidebar from '../MyComponents/Sidebar'
import {Footer} from '../MyComponents/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../MyComponents/Header';
export default function AdminDashboard() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      {/* <Outlet/> */}
      <Footer/>
    </div>
  )
}
