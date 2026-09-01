import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import NotFound from './components/Notfound';
import RoomPage from './components/rooms/main';
import MessPage from './components/mess/main';
import Newroom from './components/rooms/Newroom';
import Editroom from './components/rooms/Editroom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/room' element={<RoomPage />} />
    <Route path='/mess' element={<MessPage />} />
    <Route path='*' element={<NotFound />} />
    <Route path='/room/new' element={<Newroom />} />
    <Route path='/room/:id/edit' element={<Editroom />} />
  </Routes>
  </BrowserRouter>
);


