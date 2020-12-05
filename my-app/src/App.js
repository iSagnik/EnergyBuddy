import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Login from './pages/login.js';
import Goals from './pages/goals.js';
import Goal from './component/goal.js';


function App() {
  return (
    <div className="App">
      <AuthProvider> 
        {/* <Login/> */}
        <Goals/>
      </AuthProvider>
    </div>
  );
}

export default App;
