import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hom from './components/Hom';
import CheckOut from './components/CheckOut';




function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Routes>

        
        <Route path="/checkout" element={<CheckOut/>}></Route>
        
        <Route path="/login"></Route>
        
        <Route path="/" element={<Hom/>}></Route>
        
        
      </Routes>
      
    </Router>
    </div>
  );
}



export default App;
