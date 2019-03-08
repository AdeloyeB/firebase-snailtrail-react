import React, { useState, useEffect } from "react";
import TaskCardFunctionalFormat from "../TaskCards/TaskCardFunctionalFormat";
import { Typography, Paper, CircularProgress, Button } from "@material-ui/core";
//import NavBar from "../../NavBar";
import ButtonAppBar from "../../ButtonAppBar";
import firebase from "../firebase";
const ViewTasks = props => {
  const [tasks, setTasks] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    firebase.db
      .collection("tasks")
      .get()
      .then(querySnapshot => {
        let tasks = [];
        querySnapshot.forEach(doc => {
          tasks.push(doc.data());
          console.log(`${doc.id} => ${doc.data()}`);
        });
        setTasks(tasks);
        setLoaded(true);
      });
  }, [firebase.db]);

  return (
    <div className="ViewTasks">
      <ButtonAppBar />
      <section>
        <Paper>
          <Typography component="h1" variant="h5">
            Task Tracker
          </Typography>
        </Paper>
        {tasks &&
          tasks.map(task => (
            <TaskCardFunctionalFormat
              taskName={task.name}
              taskDescription={task.description}
            />
          ))}
      </section>
    </div>
  );
};

export default ViewTasks;
