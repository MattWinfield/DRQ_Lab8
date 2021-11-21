/* Start Importing the Components we use */
import './App.css';
import React, { Component } from 'react';
import Header from './Components/header';
import Content from './Components/content';
import Footer from './Components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Create } from './Components/create';
import { Read } from './Components/read';
import { Edit } from './Components/edit';
/* Stop Importing the Components we use */

class App extends Component {
  render() {/*Component Render Method To display content*/
    return (
      <Router>{/* Client Side Routing */}
        <div className="App">
          <Navbar bg="dark" variant="dark">{/* Navbar */}
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                {/* Nav Links to each Component and the paths */}
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
              </Nav>
            </Container>
          </Navbar>{/* Close Navbar */}

          <Switch>{/* Switch Statement for CSR */}
            {/* Set up route paths to each component */}
            <Route path="/" component={Content} exact></Route>
            <Route path="/create" component={Create}></Route>
            <Route path="/read" component={Read}></Route>
            <Route path="/edit/:id" component={Edit}></Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;/* Export the App.js File */
