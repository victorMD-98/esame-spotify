import {BrowserRouter, Route, Routes} from"react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Pages/HomePage";
import SongsPage from "./Pages/SongsPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/album/:id/:album/:i" element={<SongsPage/>} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
