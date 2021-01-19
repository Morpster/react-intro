import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <FeedPage />
        </Route>
        <Route exact path="/post/:id">
          <DetailPage />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className="site-header">
      <h1>
        <Link to="/">Bekkstagram</Link>
      </h1>
    </header>
  )
}

export default App;