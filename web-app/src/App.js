import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListShopComponent from './components/ListShopComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Switch>
            <Route path="/" exact component = {ListShopComponent}></Route>
            <Route path="/shop" component = {ListShopComponent}></Route>
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
    /*<div className="App">
      <header className="App-header">

        <h1>Hello World React</h1>
      </header>
    </div>*/
  );
}

export default App;
