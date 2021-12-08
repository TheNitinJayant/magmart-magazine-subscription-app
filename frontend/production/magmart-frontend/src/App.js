import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Magmart from './Magmart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Magmart />
      </div>
    </BrowserRouter>
  );
}

export default App;
