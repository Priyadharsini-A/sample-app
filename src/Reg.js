import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

const Reg = () => {
  const[id,setId]=useState('');
  const[password,setpassword]=useState('');
  const[email,setEmail]=useState('');
  const[phoneno,setPhoneNo]=useState('');
  const navigate=useNavigate();

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("submit")
  let obj={id,password,email,phoneno};
 // console.log(obj)
 fetch("http://localhost:3000/user",{
  method:"POST",
  headers:{"content-type":"application/json"},
  body:JSON.stringify(obj)
 }).then((res)=>{ 
  console.log("sucess");
navigate('/login');

 }).catch((err)=>{
  console.log("error")
 })
}

  return (
    <>
     <Container>
     <Row className="justify-content-md-center">
        <Col xs lg="4">
            <Card>
            <Card.Header>Registration Form</Card.Header>
            <Card.Body>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="email" value={password} onChange={(e)=>{setpassword(e.target.value)}}placeholder="Enter Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>PhoneNo</Form.Label>
        <Form.Control type="email" value={phoneno} onChange={(e)=>{setPhoneNo(e.target.value)}} placeholder="Enter Phoneno" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}placeholder="Enter Email"  />
      </Form.Group>
      <Container>
      <Row>
        <Col><Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Gender</Form.Label>

      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Male"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          
        </div>
      ))}
      </Form.Group></Col>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Country</Form.Label><Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Select Country
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">India</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Pakistan</Dropdown.Item>
        <Dropdown.Item href="#/action-3">China</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Form.Group></Col>
      </Row>
      </Container>
      
      
      <Container className='text-end'>
      <Button variant="primary" onClick={handleSubmit}>Add</Button>{' '}
      </Container>
      
      
      
    </Form>
    </Card.Body>


            </Card>
        
        </Col>
     
        </Row>
     

     </Container>
    
    
    </>
  )
}

export default Reg;