import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.jsx';
import StarshipsPage from './routes/StarshipsPage.jsx';
import SignPage from './routes/SignPage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import ProtectedRoute from './components/utils/ProtectedRoute.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/starships" element={<StarshipsPage />} />
          </Route>
          <Route path="/sign" element={<SignPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

/* NOVA OPCIO ORDENADA QUE TAMBE FUNCIONA AL EXERCICI 6
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.jsx';
import StarshipsPage from './routes/StarshipsPage.jsx';
import SignPage from './routes/SignPage.jsx';
import LoginPage from './routes/LoginPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<StarshipsPage />} />
          <Route path="/sign" element={<SignPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
*/