import Card from 'react-bootstrap/Card';

function ModuleCard({ className = '', title, value }) {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>title</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ModuleCard;