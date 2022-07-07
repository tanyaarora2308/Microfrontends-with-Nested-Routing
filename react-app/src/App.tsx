import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
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

function Users() {
  // return <section>React: About depicting server side rendering</section>;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setData(response.data);
        console.log(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center" }}>
        React: Users depicting server side rendering
      </h1>
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ol>
        {data &&
          data.map((props) => (
            <li key={props.id}>
              <p>
                <span>{props.name}:</span> {props.address.street}{" "}
                {props.address.suite} {props.address.city}
              </p>
            </li>
          ))}
      </ol>
    </div>
  );
}

// return <h2>React: Home</h2>;
// }

function Home() {
  return <h2>React:Home</h2>;
}

function About() {
  return <h2>React:About</h2>;
}
