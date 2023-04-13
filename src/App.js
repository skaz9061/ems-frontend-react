import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import { useState } from 'react';
import LoginComponent from './components/LoginComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <div>
        <Router>
          <HeaderComponent />
          <div className='container pt-5 mt-5'>
            <LoginComponent setToken={setToken} />
          </div>
          <FooterComponent />
        </Router>
      </div>
    );
  }

  return (
    <div>
      <Router>
          <HeaderComponent token={token}/>
          <div className="container pt-5 mt-5 pb-5">
            <Routes>
              <Route path='/' exact element={<ListEmployeeComponent token={token} />}></Route>
              <Route path='/employees' element={<ListEmployeeComponent token={token} />}></Route>
              <Route path='/add-employee' Component={CreateEmployeeComponent}></Route>
              <Route path='/update-employee/:id' Component={UpdateEmployeeComponent}></Route>
              <Route path='/view-employee/:id' Component={ViewEmployeeComponent}></Route>
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
