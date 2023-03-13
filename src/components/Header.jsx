
import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <h1 className="text-center text-danger m-5">Todo App </h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>
    </div>
  );
}

export default Header