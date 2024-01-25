import './App.css';
import Header from './Header';
import Body from './Body';
import { Route, Router, Routes } from 'react-router';
import TaskBox from './TaskBox';


function App() {
  return (
    <div >
    <Router>
      <Routes>
        <Route 
          path='/'
          element= {
            <>
              <Header />
              <Body />
            </>
          }
           >
          <Route
            path='/taskbox'
            element={
              <>
                <Header />
                <TaskBox />
              </>
            }
          >

          </Route>

        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
