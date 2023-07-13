import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const AddTodo = ({addTask}) => {
    const [todo,setodo]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('submi');
        addTask(todo);
        setodo('');
        console.log("todo",todo)

    }
  return (
    <>
    
 
      
        
        <InputGroup className="mb-3">
        <Form.Control
        value={todo}
        onChange={(e)=>setodo(e.target.value)}
          placeholder="Enter Todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button  onClick={handleSubmit}variant="outline-secondary" id="button-addon2">
          Add
        </Button>
      </InputGroup>

        
      
    
    </>
  )
}

export default AddTodo;