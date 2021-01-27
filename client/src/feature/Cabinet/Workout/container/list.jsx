import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {workoutFetchRequest} from "../actions";
import { Loader } from "../../../Common/Loader";
import { Table } from "antd";
import {Button} from 'react-bootstrap'

export const WorkoutList = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [workouts, setWorkouts] = useState([])
  useEffect(() => {
    setIsLoading(true)
    props.workoutFetchRequest().then((data) => {
      setIsLoading(false)
      setWorkouts(data.workouts);
    });
    // eslint-disable-next-line
  }, []);
  const columns = [
    {
      title: "Название",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Клиент",
      dataIndex: "client",
      key: "client"
    },
    {
      title: "Тренер",
      dataIndex: "trainer",
      key: "trainer"
    },
    {
      title: "actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) =>{
        return <>
          <Button variant="outline-primary" href={`/workout/${record._id}`}>Редактировать</Button>
          {' '}
          {/*<Button variant="outline-danger" onClick={()=>deleteExercise(record._id)}>Удалить</Button>*/}
        </>
      }
    }
  ];

  return (
    <div>
      <h1>Тренировки <Button type="primary" href="/workouts/create">Добавить</Button></h1>
      <div>
        <Loader isLoading={isLoading}>
          <Table columns={columns} dataSource={workouts} rowKey="_id" />
        </Loader>
      </div>
    </div>
  );
};


WorkoutList.propTypes = {
  workoutFetchRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
});

export const WorkoutListContainer = withRouter(
  connect(
    mapStateToProps,
    {
      workoutFetchRequest
    }
  )(WorkoutList)
);
