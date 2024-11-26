import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import Nav from './components/Nav'
import Overview from './components/Overview'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function App() {

  return (
    <div style={{ backgroundColor: "#909cc2" }}>
      <Nav />
      <main className='container-lg bg-body-secondary d-flex flex-column align-items-center'>
        <Overview />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}
