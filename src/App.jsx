import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Home } from './Pages/Home'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
      </Routes>
    </div>
  )
};

export default App
