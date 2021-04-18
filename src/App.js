import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';

function App() {
  const buttonHandler = ()=> {
    toast("This is out first message");
  };

  return (
    <div>
      <ToastContainer/>
      <Header/>
      <Container>
        <Row>
          <Col md={4}>
            <Menu/>
          </Col>
          <Col md={8}>
            <Home/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
