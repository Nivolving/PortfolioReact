import React from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Resume from './pages/Resume';
import TopNavbar from './components/TopNavbar';

function App() {
  return (
    <Container>
      <TopNavbar />
      <Router>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
