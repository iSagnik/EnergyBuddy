import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Login from './pages/login.js';
import Goals from './pages/goals.js';
import DashBoard from "./pages/dashboard.js"

function App() {
  return (
    <Router>
      <AuthProvider> 
        <Switch>
            <Route path="/goals" component={Goals} />
            <Route path="/dashboard" component={DashBoard}/>
            <Route exact path="/" component={Login}/>
        </Switch> 
      </AuthProvider>
    </Router>
    
  );
}

export default App;
