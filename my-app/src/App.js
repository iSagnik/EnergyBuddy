import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Login from './pages/login.js';
import Goals from './pages/goals.js';
import Goal from './components/goal.js';
import SignUp from './pages/signup.js';


function App() {
  return (
    <div className="App">
      <AuthProvider> 
        {/* { <Login/>} */}
        <Goals/>
        <SignUp/>
      </AuthProvider>
    </div>
  );
}

export default App;
