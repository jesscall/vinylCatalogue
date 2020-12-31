import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Collection from './components/pages/Collection';
import Wishlist from './components/pages/Wishlist';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/collection' exact component={Collection} />
          <Route path='/wishlist' exact component={Wishlist} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
