
import './App.css';
import HomePage from './Comp/HomePage';
import LoginPage from './Comp/LoginPage';
import Register from './Comp/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
  
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/loginpage' element={<LoginPage/>}/>
    <Route path='/Signup' element={<Register/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
