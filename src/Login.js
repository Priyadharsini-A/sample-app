import React, { useState,useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const[id,setId]=useState('');
  const[password,setpassword]=useState('');
  const navigate=useNavigate();
  useEffect(()=>{
    sessionStorage.clear();
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("proceed");
    fetch("http://localhost:3000/user/"+id).then(res=>{
      console.log(res)
return res.json();
    }).then(res=>{
console.log(res)
if(Object.keys(res)==0){
  console.log("please enter valid username")
}
else{if(res.password===password){
  console.log('same');
  sessionStorage.setItem("username",id)
  navigate('/');
}}
    }).catch(err=>{
      console.log('error');
    })

  }
  return (
    <>
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs lg="4">
          <Card>
            <Card.Header>Login Form</Card.Header>
            <Card.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter Username" />
      </Form.Group>
      
      <Container className='text-end'>
      <Button variant="primary" onClick={handleSubmit}>Login</Button>{' '}
      </Container>
      
            </Card.Body>
          </Card>
        
        </Col>
      </Row>
    

    </Container>
    
    </>

)
  }
export default Login;