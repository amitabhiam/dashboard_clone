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
          element={
            <>
              <Header />
              <Body />
            </>
          }
          />

        <Route
          path='/taskbox'
          element={
            <>
              <Header />
              <TaskBox />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
    <div >
      
    </div>
    </>
    
  );
}

export default App;
