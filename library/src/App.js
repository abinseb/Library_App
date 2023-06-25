import logo from './logo.svg';
import './App.css';
import Addbook from './components/Addbook';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Viewbooks from './components/Viewbooks';

function App() {
  return (
    <div className="App">
      {/* <Addbook/ */}
      <Header/> 
      <Routes>
        <Route path='/' element={<Viewbooks/>} />
        <Route path='/add' element={<Addbook data={{bookname:'',author:'',language:'',genre:'',booknumber:''}} method='post' />} />
          
       
      </Routes>
      
     
    </div>
  );
}

export default App;
