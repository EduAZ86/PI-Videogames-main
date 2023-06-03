import { Route, Routes, useLocation } from 'react-router-dom';
import { Landing, Home, Form, Detail } from './Views' 
import NavBar from './components/NavBar/NavBar';
import { useDispatch } from 'react-redux';

import React, { useState } from 'react';
import { getGenres, organizer } from './redux/actions';

function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  const handler_sort = (order) => {

    dispatch(organizer(order))
  }

  return (
    <div >    
      {location.pathname !== '/' && <NavBar handler_sort={handler_sort} />}
      <div >
        <Routes>
          <Route exact path = '/' element= { <Landing/>}/>
          <Route path = '/home' element= { <Home/>}/>
          <Route path = '/create' element= { <Form/>}/>
          <Route path = '/detail/:id' element= { <Detail/>}/>
        </Routes>
      </div>
        
    </div>
  )
}

export default App;
