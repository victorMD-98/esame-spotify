import {BrowserRouter, Route, Routes} from"react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
