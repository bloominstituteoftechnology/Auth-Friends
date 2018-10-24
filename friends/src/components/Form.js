import React from "react";

const Form = props => {
  return (
    <div
      className={`form-container ${props.isUpdating ? "updating" : ""}`}
      style={props.formOpen ? { display: "flex" } : { display: "none" }}
    >
      <form className={props.isUpdating ? "updating-form" : null}>
        <h2>
          {props.isUpdating ? "Update a Friend" : "Submit New Friend"}
        </h2>
        <input
          type="text"
          value={props.newFriend.name}
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={props.newFriend.age}
          name="age"
          placeholder="Age"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={props.newFriend.email}
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <div className="save-cancel">
          <img
            src={save}
            alt="save"
            onClick={
              props.isUpdating
                ? this.handleSubmitUpdate
                : this.handleSubmit
            }
          />
          <img
            className="cancel-button"
            src={xCircleWhite}
            onClick={this.handleCancel}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
