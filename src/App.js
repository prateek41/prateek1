import logo from './logo.svg';
import './App.css';
import Sidebar from './MyComponents/Sidebar'
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';


function App() {
  return (
    <>
      <Header/>
        <Sidebar/>
      <Footer/>
    </>
  );
}

export default App;
