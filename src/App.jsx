import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import Nav from './components/Nav'

function App() {

  return (
    <div className='bg-body-secondary'>
      <Nav />
      <div className='container-fluid'>
        <h1 className='text-center'>Welcome</h1>
      </div>
    </div>
  )
}

export default App
