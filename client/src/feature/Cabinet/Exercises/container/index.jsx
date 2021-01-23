import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {exercisesDeleteRequest, exercisesFetchRequest} from "../actions";
import { Loader } from "../../../Common/Loader";
import { Table } from "antd";
import style from "./index.module.scss";
import {Button} from 'react-bootstrap'

export const Exercises = props => {
  useEffect(() => {
    props.exercisesFetchRequest();
    // eslint-disable-next-line
  }, []);
  const deleteExercise = (id) => {
    const confirm = window.confirm('Удалить упражнение?')
    if(confirm){
      props.exercisesDeleteRequest(id).then((result)=>{
        console.log('result', result)
        if(result.success){
          props.exercisesFetchRequest();
        }else{
          alert('Ошибка')
        }
      })
    }
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) =>{
        return <>
          <Button variant="outline-primary" href={`/exercises/${record._id}`}>Редактировать</Button>
          {' '}
          <Button variant="outline-danger" onClick={()=>deleteExercise(record._id)}>Удалить</Button>
        </>
      }
    }
  ];

  return (
    <div>
      <h1>Exercises <Button type="primary" href="/exercises/add">Добавить</Button></h1>
      <div className={style.exercisesList}>
        <Loader isLoading={props.isLoading}>
          <Table columns={columns} dataSource={props.exercises} rowKey="_id" />
        </Loader>
      </div>
    </div>
  );
};

Exercises.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  exercises: PropTypes.array,
  exercisesFetchRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.cabinet.exercises.isLoading,
  exercises: state.cabinet.exercises.data
});

export const ExercisesContainer = withRouter(
  connect(
    mapStateToProps,
    {
      exercisesFetchRequest,
      exercisesDeleteRequest
    }
  )(Exercises)
);
