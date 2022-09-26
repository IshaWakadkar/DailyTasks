import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
    <Router>
      <Header></Header>
      <Routes>
          <Route index element={<h1><Home></Home></h1>}></Route>
          <Route path='movie/:id' element={<h2>Movie Detail Page</h2>}></Route>
          <Route path='movies/:types' element={<h2>Movie List Page</h2>}></Route>
          <Route path='/*' element={<h2>Error Page</h2>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
