import React, { useState } from "react";
import "./style.css";
import { Typography, Paper, CircularProgress, Button } from "@material-ui/core";
const TaskCardFunctionalFormat = props => {
  let [accepted, setAccepted] = useState(false);
  const { taskName, taskDescription } = props;

  return (
    <Paper className="TaskCard">
      {accepted && <span>You have accepted the task</span>}
      <h2>{taskName}</h2>
      <p>{taskDescription}</p>
      <p>
        <input
          class="uk-checkbox"
          type="checkbox"
          onChange={() => {
            setAccepted(!accepted);
          }}
          value={accepted}
        />
      </p>
    </Paper>
  );
};

export default TaskCardFunctionalFormat;
