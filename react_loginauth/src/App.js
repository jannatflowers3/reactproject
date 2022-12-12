import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React,{ useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
// import Home from './components/pages/Home';

function App() {
const [token,setToken]= useState();
if(!token){
  return <Login  setToken={setToken}/>
}
  return (
    <div className="container">
      {/* < Home /> */}
      <h1>home page</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
          
        <Route path='/preference' element= {<Preferences />} />
        <Route path='/login' element= {<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
