import React, { useState, useEffect } from "react";
import TaskCardFunctionalFormat from "../TaskCards/TaskCardFunctionalFormat";
import { CircularProgress } from "@material-ui/core";
import NavBar from "../../NavBar";
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
      <NavBar />
      <section>
        <h1>Welcome to Task Tracker</h1>
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
