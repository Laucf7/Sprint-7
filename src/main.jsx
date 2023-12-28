import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from "./redux/store.jsx";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import StarshipsPage from './routes/StarshipsPage.jsx';
import SignPage from './routes/SignPage.jsx';
import LoginPage from './routes/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/starships',
    element: <StarshipsPage/>
  },
  {
    path:'/sign',
    element: <SignPage/>
  },
  {
    path: '/login',
    element: <LoginPage />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)