import React from "react";
import { Formik } from "formik";
import ButtonAppBar from "../../ButtonAppBar";
//import NavBar from "../../NavBar";
import firebase from "../firebase";
import Container from "react-bootstrap/Container";
//import withFirebase from '../database/with-firebase';

import "./style.css";
import DashboardCard from "../DashboardCard";
const AddTask = props => {
  const submitToFirebase = formValues => {
    // add the fields to firebase
    // redirect the user to the homepage
    console.log(formValues);
    firebase.db
      .collection("tasks")
      .doc(formValues.name)
      .set(formValues);
  };

  return (
    <div>
      <ButtonAppBar />
      <div className="AddTask">
        <h1>Add a Task</h1>
        <h1>My Form</h1>
        <Formik
          initialValues={{ name: "", description: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              //alert(JSON.stringify(values, null, 2));
              submitToFirebase(values);
              //actions.setSubmitting(false);
            }, 1000);
          }}
          render={props => (
            <form onSubmit={props.handleSubmit}>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                placeholder="Name of task"
                name="name"
              />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              <input
                type="textarea"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.description}
                placeholder="What's the task involve?"
                name="description"
              />
              {props.errors.description && (
                <div id="feedback">{props.errors.description}</div>
              )}
              <button
                className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default AddTask;
