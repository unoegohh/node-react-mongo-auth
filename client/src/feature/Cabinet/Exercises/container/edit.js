import React, {useEffect, useState} from 'react';
import {withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {exercisesEditRequest, exercisesGetRequest} from "../actions";
import {Form, Button, Row, Col, Spinner} from "react-bootstrap";
import { useForm } from "react-hook-form";
import ExerciseForm from "./form";
import { Loader } from "../../../Common/Loader";

const ExcersiseEdit = (props) => {
  const { register, handleSubmit, reset} = useForm();
  const id = props.match.params.id
  const {exercisesGetRequest} = props;

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    exercisesGetRequest(id).then((result)=>{
      setLoading(false);
      if(result.success){
        reset(result.exercise)
      }
    })
  },[])

  const onSubmit = data => {
    setIsLoading(true);
    props.exercisesEditRequest(id,data).then((response) => {
      console.log(123)
      if(response.success){
        props.history.push('/exercises?');
      }else{
        alert('ошибка')
        setIsLoading(false);
      }
    })
  }

  return <div>
    <Loader isLoading={loading}>
      <Row>
        <Col md={12}>
          <h1>Редактирование управжнения</h1>
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
    </Loader>
  </div>
}

const mapStateToProps = state => ({
  isLoading: state.cabinet.exercises.isLoading
});
export const ExercisesEditContainer = withRouter(
  connect(
    mapStateToProps,
    { exercisesGetRequest, exercisesEditRequest }
  )(ExcersiseEdit)
);
