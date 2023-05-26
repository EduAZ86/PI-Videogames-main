import { Route, Switch, useLocation } from 'react-router-dom';
import { Landing, Home, Form, Detail } from './Views' 
import NavBar from './components/NavBar/NavBar';
function App() {
  const location = useLocation()
  return (
    <div className="App">
      
        {location.pathname !== '/' && <NavBar/>}
        <Route exact path = '/' render = {() => <Landing/>}/>
        <Route path = '/home' render = {() => <Home/>}/>
        <Route path = '/create' render = {() => <Form/>}/>
        <Route path = '/detail:id' render = {() => <Detail/>}/>      
        
    </div>
  );
}

export default App;
