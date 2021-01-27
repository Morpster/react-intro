import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import DetailPage from "./pages/DetailPage";
import AddPhoto from "./pages/AddPhoto";

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
        <Route exact path="/addphoto">
          <AddPhoto />
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
      <Link to="/addphoto">+</Link>
    </header>
  )
}

export default App;