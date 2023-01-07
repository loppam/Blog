import Navbar from './Components/navbar'
import Homepage from './Components/home'
import Create from './Components/create'
import BlogDetails from './Components/BlogDetails'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from './Components/notFound'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/create' element={<Create />} />
            <Route path='/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
