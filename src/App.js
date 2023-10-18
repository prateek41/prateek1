import logo from './logo.svg';
import './App.css';

import Addmovie from './Addmovie/Addmovie';
import { BrowserRouter, Route, Routes ,useNavigate} from "react-router-dom"
import AdminDashboard from './AdminDashboard/AdminDashboard';
import Sidebar from './MyComponents/Sidebar';
import Allmovie from './Allmovie/Allmovie';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<AdminDashboard/>}>
            <Route path="/Addmovie" element={<Addmovie/>}/> 
            <Route path="/Allmovie" element={<Allmovie/>}/> 
          </Route>           
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
