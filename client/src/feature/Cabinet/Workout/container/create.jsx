import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {exercisesCreateRequest} from "../../Exercises/actions";
import {Button, Col, Row} from "react-bootstrap";
import WorkoutForm from "./components/form";

const WorkoutCreate = (props) => {

  return <>
    <Row>
      <Col md={12}>
        <h1>Создание тренировки</h1>
        <WorkoutForm/>
      </Col>
    </Row>
  </>
}


const mapStateToProps = state => ({});
export const WorkoutCreateContainer = withRouter(
  connect(
    mapStateToProps,
    { exercisesCreateRequest }
  )(WorkoutCreate)
);
