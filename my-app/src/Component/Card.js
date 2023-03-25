import Card from 'react-bootstrap/Card';
import Button1 from './Gobutton'

function BasicExample() {
    return (
     <div className="container mt-5" >
<div className="row ">
  <div className="col-4 d-flex justify-content-center">
  <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Peafowl_%28Peacock%29_Feather.jpg" style={{height:"200px"}} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         <Button1/>
        </Card.Body>
      </Card> 
  </div>
  <div className="col-4  d-flex justify-content-center">
  <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" style={{height:"200px"}} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button1/>
        </Card.Body>
      </Card> 
  </div>
  <div className="col-4  d-flex justify-content-center">
  <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" style={{height:"200px"}} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button1/>
        </Card.Body>
      </Card>
  </div>
</div>
     </div>
    );
  }
  
  export default BasicExample;