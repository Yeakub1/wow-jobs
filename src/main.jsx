import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import JobDetails from './components/JobDetails/JobDetails';
import ErrorPage from './components/ErrorPage';
import { productsAndData } from './Loder/productAndCartData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: productsAndData,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: async () => fetch("/jobdetails.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
