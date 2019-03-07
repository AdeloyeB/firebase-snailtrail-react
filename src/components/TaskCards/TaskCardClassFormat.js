import React, { Component } from "react";

class TaskCardClassFormat extends Component {
  state = {
    accepted: false
  };

  handleChange = event => {
    this.setState({
      accepted: !this.state.accepted
    });
  };

  render = () => {
    const { accepted } = this.state;
    const { taskName, taskDescription } = this.props;
    return (
      <article className="TaskCard">
        {accepted && <span>You have accepted the task</span>}
        <h2>{taskName}</h2>
        <p>{taskDescription}</p>
        <p>
          <input
            class="uk-checkbox"
            type="checkbox"
            onChange={this.handleChange}
            value={accepted}
          />
        </p>
      </article>
    );
  };
}

export default TaskCardClassFormat;
