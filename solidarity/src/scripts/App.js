import Header from '../components/heading/Header.jsx';
import '../styles/MonApp.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../components/Pagehome/Home.jsx";
import About from '../components/about/About.jsx';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
