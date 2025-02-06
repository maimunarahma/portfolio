
import AboutMe from './AboutMe'
import './App.css'
import Banner from './Banner'
import Contact from './Contact'
import Edu from './Edu'
import "./index.css"
import Nav from './Nav'
function App() {
  

  return (
    <div className='container mx-auto px-0'>
   <Nav />
    <Banner />
    <AboutMe></AboutMe>
    <Edu></Edu>
    <Contact></Contact>
    </div>
  )
}

export default App
