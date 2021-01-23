import React from 'react';
import {Button, Form, Spinner} from "react-bootstrap";

const ExerciseForm = (props) => {
  const {isLoading, onSubmit, register} = props;
  return <Form onSubmit={onSubmit}>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Название</Form.Label>
      <Form.Control type="text"
                    name="name"
                    defaultValue=""
                    ref={register}
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Сохранить
      {isLoading?<Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />:null}

    </Button>
  </Form>
}

export default ExerciseForm
