// import logo from './logo.svg';
import './App.css';
import {Form,Button} from 'react-bootstrap'
import anonymImg from  './img/anonymous-icon-0.jpg'
import verifImg from './img/verif.png'

function App() {
  return (
    <div className="App">
      <Form className="form">
      <img className="anonymous-icon" src={anonymImg}></img>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" id="robot-verif" controlId="formBasicCheckbox">
        <img className="verif-icon" src={verifImg}></img>
        <Form.Check className="checkbox" type="checkbox" label="I'm not a robot" />
      </Form.Group>
      <Form.Group className="buttons">
        <Button className="submit-btn" variant="primary" type="submit">
          Submit
        </Button>
        <Button className="submit-btn" variant="primary" type="submit">
          Clear
        </Button>
      </Form.Group>
    </Form>
    </div>
  );
}

export default App;
