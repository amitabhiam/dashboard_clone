import './App.css';
import Header from './Header';
import Body from './Body';

import TaskBox from './TaskBox';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <div >
      <Header />
      <Body />
      <TaskBox />
    </div>
  );
}

export default App;
