import React from 'react'
import { ListGroup } from 'react-bootstrap'

const TodoList = ({todos}) => {
  return (
    <div>
      <h2 className="text-center text-secondary">Todos</h2>
      <ListGroup className='w-50 d-flex mx-auto' >
        <ListGroup.Item variant="success">Success</ListGroup.Item>
        {
          todos.map((todo)=>{ <ListGroup.Item variant="success">{todo.text}</ListGroup.Item>;})
        }
      </ListGroup>
    </div>
  );
}

export default TodoList