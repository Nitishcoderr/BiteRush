import About from "./Components/About"
import Body from "./Components/Body"
import Contact from "./Components/Contact"
import Error from "./Components/Error"
import Header from "./Components/Header"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import RestaurantMenuPage from "./Components/RestaurantMenuPage"
// import Grocery from "./Components/Grocery"
import { Suspense, lazy, useContext, useEffect, useState } from "react"
import Shimmer from "./Components/Shimmer"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"




function App() {

  const Grocery = lazy(()=> import("./Components/Grocery") )


  const [userName, setUserName] = useState()
  

  useEffect(() => {
  //  Make an api call and send username and password 
  const data = {
    name:"Nitish"
  };
  setUserName(data.name)
  }, [])

  return (
    <Router>
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName,setUserName}} >
      <Header/>
      <Routes>
        <Route exact path="/" element={<Body/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/grocery" element={ <Suspense fallback={<Shimmer/>} ><Grocery/></Suspense>  } />
        <Route exact path="/restaurants/:resId" element={<RestaurantMenuPage/>} />
        {/* page not found */}
        <Route exact path="/*" element={<Error/>} />
      </Routes>
      </UserContext.Provider>
      </Provider>
    </Router>
  )
}

export default App
