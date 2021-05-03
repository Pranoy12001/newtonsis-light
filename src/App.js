import './App.css';
import { ToastContainer } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddCourse from './components/AddCourse';
import AllCourses from './components/AllCourses';
import ViewCourse from './components/ViewCourse';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact />
              <Route path="/add-course" component={AddCourse} exact />
              <Route path="/view-courses" component={AllCourses} exact />
              <Route path="/view-course" component={ViewCourse} exact />
              <Route path="/about" component={About} exact />
              <Route path="/contact" component={Contact} exact />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
