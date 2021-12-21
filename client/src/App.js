import {BrowserRouter as Router , Routes ,Route , Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MainPage from './components/MainPage/MainPage';
import UserProfile from './components/UserProfile/UserProfile';
import MyExperiences from './components/MyExperiences/MyExperiences';
import AddExperience from './components/AddExperience/AddExperience';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/' element={<MainPage/>}></Route>
            <Route path='/myprofile/:id' element={<UserProfile/>}></Route>
            <Route path='/myprofile/:id/myexperiences' element={<MyExperiences/>}></Route>
            <Route path='/myprofile/:id/addexperience' element={<AddExperience/>}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
