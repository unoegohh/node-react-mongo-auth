import React, {useState} from 'react';
import {withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {exercisesCreateRequest, exercisesFetchRequest} from "../actions";
import {Form, Button, Row, Col, Spinner} from "react-bootstrap";
import { useForm } from "react-hook-form";
import ExerciseForm from "./form";

const ExcersiseAdd = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    setIsLoading(true);
    props.exercisesCreateRequest(data).then((response) => {
      console.log(123)
      if(response.success){
        props.history.push('/exercises?');
      }else{
        alert('ошибка')
        setIsLoading(false);
      }
    })
  }
  const [isLoading, setIsLoading] = useState(false)

  return <div>
    <Row>
      <Col md={12}>
        <h1>Создание управжнения</h1>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ExerciseForm onSubmit={handleSubmit(onSubmit)}
                      isLoading={isLoading}
                      register={register}
        />
      </Col>
    </Row>
  </div>
}

const mapStateToProps = state => ({
  isLoading: state.cabinet.exercises.isLoading
});
export const ExercisesAddContainer = withRouter(
  connect(
    mapStateToProps,
    { exercisesCreateRequest }
  )(ExcersiseAdd)
);
