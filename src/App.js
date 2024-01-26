import './App.css';
import Header from './Header';
import Body from './Body';

import TaskBox from './TaskBox';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          >

        </Route>
      </Routes>
    </BrowserRouter>
    <div >
      
      <TaskBox />
    </div>
    </>
    
  );
}

export default App;
