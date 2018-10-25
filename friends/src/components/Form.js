import React from "react";
import save from "../assets/save.svg"
import xCircleWhite from "../assets/x-circle white.svg"

const Form = props => (
  <div
    className="form-container"
    // style={props.formOpen ? { display: "flex" } : { display: "none" }}
  >
    <form>
      <h2>{props.isUpdating ? "Update a Friend" : "Submit New Friend"}</h2>
      <input
        type="text"
        value={props.newFriend.name}
        name="name"
        placeholder="Name"
        onChange={props.handleChange}
      />
      <input
        type="text"
        value={props.newFriend.age}
        name="age"
        placeholder="Age"
        onChange={props.handleChange}
      />
      <input
        type="text"
        value={props.newFriend.email}
        name="email"
        placeholder="Email"
        onChange={props.handleChange}
      />
      <div className="save-cancel">
        <img
          src={save}
          alt="save"
          onClick={
            props.isUpdating ? props.handleSubmitUpdate : props.handleSubmit
          }
        />
        <img
          className="cancel-button"
          src={xCircleWhite}
          onClick={props.handleCancel}
        />
      </div>
    </form>
  </div>
);

export default Form;
