import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function login({ touched, errors, history }) {
    return (
        <Form className="form">
            <div className="form-group">
                <label className="label">Email</label>
                <Field className="input" name="email" type="email" autocomplete="off" />
            </div>
            <div className="form-group">
                <label className="label">Password</label>
                <Field
                className="input"
                name="password"
                type="password"
                autoComplete="off"
                />
                <p>{touched.password && errors.password}</p>
            </div>
            <button type="submit" className="btn">
                Submit &rarr;
            </button>
        </Form>
    );
}
export default withFormik({
    mapPropsToValues() {
        return {
            email: "",
            password: "",
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
        .email()
        .required(),
        password: Yup.string()
        .min(6)
        .required()
    }),

    handleSubmit(values, formikBag) {
        const url = "https://localhost:5000";
        axios
        .post(url, values)
        .then(response => {
            localStorage.setItem("token", response.data.token);
            formikBag.props.history.push("/profile");
        })
    
        .catch(e => {
            console.log(e.response.data);
          });
      }
    })(login);