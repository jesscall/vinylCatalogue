import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Collection from './components/pages/Collection';
import Wishlist from './components/pages/Wishlist';
import SearchPage from './components/pages/SearchPage';
import Discography from './components/discography/Discography';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/collection' exact component={Collection} />
          <Route path='/wishlist' exact component={Wishlist} />
          <Route path='/search' exact component={SearchPage} />
          <Route path='/discography/:id' component={Discography} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
