import About from "./Components/About"
import Body from "./Components/Body"
import Contact from "./Components/Contact"
import Error from "./Components/Error"
import Header from "./Components/Header"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import RestaurantMenuPage from "./Components/RestaurantMenuPage"

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Body/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/restaurants/:resId" element={<RestaurantMenuPage/>} />
        {/* page not found */}
        <Route exact path="/*" element={<Error/>} />
      </Routes>
      
    </Router>
  )
}

export default App
