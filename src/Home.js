import React, { useState } from 'react';
import AddTodo from './AddTodo';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container,Col,Row,Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Home = () => {
  const user=sessionStorage.getItem('username');
  const[list,setList]=useState([]);
  const[uptext,setuptext]=useState('')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
 
  const addTask=text=>{
setList([...list,{name:text,completed:false}])
  }
  const handleDelete=(index)=>{
    const newTask=[...list];
    newTask.splice(index,1);
    setList(newTask);

  }
 
    const handleShow = (index) => {
      setShow(true);
      const selectedtask=list[index];
      console.log(list[index]);
      console.log(selectedtask,"sel")
      setuptext(selectedtask);

    }
  console.log("list",list)
  return (
    <>
    <h1>Welcome {user}</h1>
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs lg="4">
        <Card>
        <Card.Header>TodoList</Card.Header>
        <Card.Body>
        <AddTodo addTask={addTask}/>


        
        {list.map((x,index)=>
        <ListGroup variant="flush">
        <ListGroup.Item>{x.name}<Button onClick={()=>handleShow(index)}variant="danger">Update</Button><Button onClick={()=>handleDelete(index)}variant="danger">Delete</Button>{' '}</ListGroup.Item>
        
      </ListGroup>
        
        )}

    </Card.Body>
    </Card>
          </Col> 
      </Row>
    
    </Container>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><InputGroup className="mb-3">
        <Form.Control
        value={uptext}
          placeholder="Enter Todo"
          onChange={(e)=>setuptext(e.target.value)}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        
      </InputGroup></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Update
          </Button>
        </Modal.Footer>
      </Modal>



    </>
  )
}

export default Home;