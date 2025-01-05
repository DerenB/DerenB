import { Link } from 'react-router-dom';
import '../styles/App.css'

function App() {
  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      <nav>
          <Link to="/wave">Go to Wave Page</Link>
      </nav>
    </div>
  )
}

export default App
