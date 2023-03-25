import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const darkmode = () => {
  return (
    <div>
<div className="container-fluid mt-5">
  <div className="row" style={{backgroundImage:"url(https://t4.ftcdn.net/jpg/04/23/77/57/360_F_423775752_a9ycJIF7kT8aAmroac9O40HMFYwxZyrz.jpg)",height:"500px",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"fixed"}}>
  <div className="col-4 d-flex justify-content-center align-items-center">
  <Card style={{ width: '18rem',boxShadow:"1px 1px 10px 1px white inset",backdropFilter:"blur(2px)",backgroundColor:"rgba(255, 24, 255, 0.4)",color:"white" }}>
        <Card.Body>
          <Card.Title className='text-center'>
          <lord-icon
    src="https://cdn.lordicon.com/hmmzddsk.json"
    trigger="loop"
    style={{width:"80px",height:"80px"}}>
</lord-icon>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         <Button><link rel="stylesheet" href="" />Show More</Button>
        </Card.Body>
      </Card> 
  </div>
  <div className="col-4 d-flex justify-content-center align-items-center">
  <Card style={{ width: '18rem',boxShadow:"1px 1px 10px 1px white inset",backdropFilter:"blur(2px)",backgroundColor:"rgba(245, 64, 35, 0.4)",color:"white" }}>
        <Card.Body>
          <Card.Title className='text-center'>
          <lord-icon
    src="https://cdn.lordicon.com/alnsmmtf.json"
    trigger="loop"
    style={{width:"80px",height:"80px"}}
  >
</lord-icon>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         <Button><link rel="stylesheet" href="" />Show More</Button>
        </Card.Body>
      </Card> 
  </div>
  <div className="col-4 d-flex justify-content-center align-items-center">
  <Card style={{ width: '18rem',boxShadow:"1px 1px 10px 1px white inset",backdropFilter:"blur(2px)",backgroundColor:"rgba(25, 24, 255, 0.4)",color:"white" }}>
        <Card.Body>
          <Card.Title className='text-center'>
          <lord-icon
    src="https://cdn.lordicon.com/lxotnbfa.json"
    trigger="loop"
    style={{width:"80px",height:"80px"}}
   >
</lord-icon>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         <Button><link rel="stylesheet" href="" />Show More</Button>
        </Card.Body>
      </Card> 
  </div>
  </div>
</div>
    </div>
  )
}

export default darkmode
