import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Login from './pages/login.js';


function App() {
  return (
    <div className="App">
      <AuthProvider> 
        <Login/>
      </AuthProvider>
    </div>
  );
}

export default App;
