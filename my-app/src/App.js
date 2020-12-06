import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Login from './pages/login.js';
import Goals from './pages/goals.js';
import SignUp from './pages/signup.js';
import DashBoard from "./pages/dashboard.js"

function App() {
  return (
    <Router>
      <AuthProvider> 
        <Switch>
            {/* <Route path="/signup" component={SignUp} /> */}
            <Route path="/goals" component={Goals} />
            {/* <Route path="/dashboard" component={DashBoard} /> */}
<<<<<<< HEAD
            <Route path="/dashboard" component={DashBoard}/>
            <Route exact path="/" component={SignUp}/>
            
=======
            <Route exact path="/" component={Login}/>
>>>>>>> 49b0f2b215048e41107de7c033cb061c3ad89feb
        </Switch> 
      </AuthProvider>
    </Router>
    
  );
}

export default App;
