import React, { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans, { loader as vansLoader } from './pages/vans/Vans'
import VanDetails, {loader as hostVansLoader} from './pages/vans/VanDetails'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import HostVans, {loader as hostVanLoader} from './pages/Host/HostVans'
import HostVanDetails, { loader as hostVanDetailsLoader } from './pages/Host/HostVanDetails'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanInfo from './pages/Host/HostVanInfo'
import NotFound from './pages/NotFound'
import Error from './pages/Error'
import Login from './pages/Login'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans />} loader={vansLoader} errorElement={<Error />} />
      <Route path='vans/:id' element={<VanDetails />} loader={hostVansLoader}/>
      <Route path='login' element={<Login />} />
      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='income' element={<Income />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='vans' element={<HostVans />} loader={hostVanLoader}/>
        <Route path='vans/:id' element={<HostVanDetails />} loader={hostVanDetailsLoader}>
          <Route index element={<HostVanInfo />} />
          <Route path='pricing' element={<HostVanPricing />} />
          <Route path='photos' element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  ))


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
