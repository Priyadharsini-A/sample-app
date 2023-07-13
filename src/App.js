import Home from './Home';
import Login from './Login';
import Reg from './Reg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/reg' element={<Reg/>}></Route>
      </Routes>
      </BrowserRouter>
      <h1>React</h1>
    </div>
  );
}

export default App;
