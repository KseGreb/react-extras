import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import picture from "./image1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;

// https://react-bootstrap.github.io/docs/getting-started/introduction
//don't forget to add style link to index.html
