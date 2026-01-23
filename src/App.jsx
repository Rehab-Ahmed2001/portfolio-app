import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Education from "./pages/Education"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Hero from "./pages/Hero"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Hero/>} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
