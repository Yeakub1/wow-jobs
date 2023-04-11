import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import JobCatagory from './components/Jobcatagory/JobCatagory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar></Navbar>,
    children: [
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/',
        element: <Header></Header>,
        
      },
      {
        path: '/',
        
      },
    ]
  },
    
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
