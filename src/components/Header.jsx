
import React, { useState } from 'react'
import {Button, Form, InputGroup } from 'react-bootstrap';

const Header = () => {
       const [task, setTask] = useState("");
       const addTodo =()=>{
          console.log(task);
       }
  return (
    <div>
      <h1 className="text-center text-danger m-5">Todo App </h1>
      <InputGroup className="mb-3 w-50 d-flex mx-auto">
        <Form.Control
          placeholder="Enter New Todo..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={task}
          onChange={(e)=> setTask(e.target.value)}
        />
        <button className='input-group-text bg-success' id="basic-addon2" onClick={addTodo}>Add Todo</button>
      </InputGroup>
    </div>
  );
}

export default Header