import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddCourse from './components/AddCourse';
import AllCourses from './components/AllCourses';

function App() {
  const buttonHandler = ()=> {
    toast("This is out first message");
  };

  return (
    <div>
      <Router>
        <ToastContainer/>
        <Header/>
        <Container>
          <Row>
            <Col md={4}>
              <Menu/>
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact/>
              <Route path="/add-course" component={AddCourse} exact/>
              <Route path="/view-courses" component={AllCourses} exact/>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
