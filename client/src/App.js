import { Route, Routes, useLocation } from 'react-router-dom';
import { Landing, Home, Form, Detail } from './Views' 
import NavBar from './components/NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect, useState } from 'react';
import { getGenres, getVideoGames, organizer } from './redux/actions';

function App() {
  const location = useLocation()
  // const dispatch = useDispatch()
  // const video_games = useSelector((state) => state.videogames)
  
  // const handler_sort = (order) => {

  //   dispatch(organizer(order))

    
  // }

  // useEffect(() => {
  //   dispatch(getVideoGames)
  // },[video_games])

  return (
    <div >    
      {location.pathname !== '/' && <NavBar />}
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
