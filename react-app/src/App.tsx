import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App({ name }) {
  return (
    <Router>
      <div>
        <nav>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              listStyleType: "none",
              height: "100%",
              marginTop: "-17%",
            }}
          >
            <li>
              <Link to="/react" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/react/about" style={{ textDecoration: "none" }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/react/users" style={{ textDecoration: "none" }}>
                Users
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/react/about">
            <About />
          </Route>
          <Route path="/react/users">
            <Users />
          </Route>
          <Route path="/react">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>React: Home</h2>;
}

function About() {
  return <h2>React:About</h2>;
}

function Users() {
  return <h2>React:Users</h2>;
}
