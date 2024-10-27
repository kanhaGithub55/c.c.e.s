import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Courses from './components/Courses/Courses.jsx'
import CourseOpen from './components/CourseOpen/CourseOpen.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import About from  './components/About /About.jsx'
import Contact from './components/Contact/Contact.jsx'
import SingUp from './components/SingUp/SingUp.jsx'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element= {<Home/>} />
//       <Route path='About' element= {<About/>} />
//       <Route path='contect' element= {<Contect/>} />


//     </Route>
//   )
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element= {<Home/>} />
      <Route path='Courses' element= {<Courses/>} />
      <Route path='CourseOpen' element= {<CourseOpen/>} />
      <Route path='About'  element={<About/>} />
      <Route path='Pricing'  element={<Pricing/>} />
      <Route path='Contact'  element={<Contact/>} />
      <Route path='SingUp'  element={<SingUp/>} />
      <Route path='Login' element= {<Login/>} />



    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
