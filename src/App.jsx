import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import Nav from './components/Nav'
import Overview from './components/Overview'

export default function App() {

  return (
    <div className='vw-100' style={{ backgroundColor: "#909cc2" }}>
      <Nav />
      <main className='container-lg bg-body-secondary d-flex flex-column align-items-center'>
        <Overview />
      </main>
    </div>
  )
}
