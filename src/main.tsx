import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { FormikForm } from './components/Formik/Formik';

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<App/>
		),
	},
  {
		path: "/formik",
		element: (
			<FormikForm/>
		),
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
