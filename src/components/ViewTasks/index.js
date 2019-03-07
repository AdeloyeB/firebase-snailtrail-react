import React, { useState, useEffect } from "react";
import TaskCardFunctionalFormat from "../TaskCards/TaskCardFunctionalFormat";
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
      {!loaded && <span data-uk-spinner="ratio: 4.5" />}
      {loaded && (
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
      )}
    </div>
  );
};

export default ViewTasks;
