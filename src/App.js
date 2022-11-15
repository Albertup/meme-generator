
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import MemesPage from './Pages/MemesPage/MemesPage';
import MemeDetailPage from './Pages/MemeDetailPage/MemeDetailPage';
import Navbar from './Components/Navbar/Navbar';


function App() {
  

  return (
    
      <div>
      
      
        <Navbar/>
        
        
      
      <main>
      
      <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route exact path='/about' element={<AboutPage/>}/>
            <Route exact path='/memes' element={<MemesPage/>}/>
            <Route exact path='/memes/:idMeme' element={<MemeDetailPage/>}/>
        </Routes>
      </div>  

      
        
              
      </main>
      
    </div>
  );
}

export default App;
