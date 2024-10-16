import React from 'react';
import { BrowserRouter, Link, useRoutes } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Event from '../pages/Event';

const AppRoutes = () => {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/events', element: <Events /> },
    { path: '/events/:id', element: <Event /> },
  ];

  return useRoutes(routes);
};

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
          <div className='flex flex-row text-white'>
            <div className='flex flex-row w-full mt-2 justify-evenly'>
            <Link className='p-2 rounded-md bg-slate-400' to='/' role='button'>Home</Link>
            <Link className='p-2 rounded-md bg-slate-400' to='/events' role='button'>Events</Link>
          </div>
          </div>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;