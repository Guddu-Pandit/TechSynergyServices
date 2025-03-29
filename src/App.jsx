
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'
import Layout from './provider/layout.jsx'


function App() {

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/training" element={<Landing/>}/>
          <Route path="/contact" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
