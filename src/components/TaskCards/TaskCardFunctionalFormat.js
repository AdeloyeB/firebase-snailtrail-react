import React, { useState } from "react";
import "./style.css";
const TaskCardFunctionalFormat = props => {
  let [accepted, setAccepted] = useState(false);
  const { taskName, taskDescription } = props;

  return (
    <article className="TaskCard">
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
    </article>
  );
};

export default TaskCardFunctionalFormat;
