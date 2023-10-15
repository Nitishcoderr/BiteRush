import About from "./Components/About"
import Body from "./Components/Body"
import Contact from "./Components/Contact"
import Error from "./Components/Error"
import Header from "./Components/Header"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Body/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/*" element={<Error/>} />
      </Routes>
      
    </Router>
  )
}

export default App
