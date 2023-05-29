import { Route, Switch, useLocation } from 'react-router-dom';
import { Landing, Home, Form, Detail } from './Views' 
import NavBar from './components/NavBar/NavBar';
function App() {
  const location = useLocation()
  return (
    <div className="App">

      {location.pathname !== '/' && <NavBar/>}
      <Switch>
        <Route exact path = '/' component = {() => <Landing/>}/>
        <Route path = '/home' component = {() => <Home/>}/>
        <Route path = '/create' component = {() => <Form/>}/>
        <Route path = '/detail:id' component = {() => <Detail/>}/>
      </Switch>     
        
    </div>
  );
}

export default App;
