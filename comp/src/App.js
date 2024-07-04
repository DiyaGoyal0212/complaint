import First from './components/First';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import './App.css';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    <>
    <BrowserRouter>
   
    <Routes>
        <Route path='/' element={<First/>} />
        <Route path='/AdminLogin' element={<AdminLogin/>} />
        
       
        
    </Routes>
   
    </BrowserRouter>
    </>
  );
}

export default App;
