import Navbar from './Components/navbar'
import Homepage from './Components/home'
import Create from './Components/create'
import BlogDetails from './Components/BlogDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './Components/notFound'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
            <Homepage />
            </Route>
            <Route path='/create'>
            <Create />  
            </Route>
            <Route path='/:id'>
            <BlogDetails />  
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
