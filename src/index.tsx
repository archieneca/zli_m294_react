import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Tasks from './components/Tasks';
import Menu from './components/Menu';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import axios from 'axios';
import { Task } from './App';
import Home from './components/Home';
import Edit from './components/Edit';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Menu/>
      <Home/>
    </div>
    ,
  },
  {
    path: "/tasks",
    element:
    <div>
      <Menu/>
      <Tasks tasks={[]} deleteTask={function (task: Task): void {
          throw new Error('Function not implemented.');
        } } editTask={function (task: Task): void {
          throw new Error('Function not implemented.');
        } }/>
      <App/>
    </div>
    ,
  },
  
  
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
