import { Link } from 'react-router-dom';
import '../styles/App.css'

function App() {
  return (
    <div className='mainPage'>
      <h1>Main Page</h1>
      <nav>
          <Link to="/wave" className="nav-link">Go to Wave Page</Link>
          <Link to="/headline" className="nav-link">Go to Headline Page</Link>
      </nav>
    </div>
  )
}

export default App
