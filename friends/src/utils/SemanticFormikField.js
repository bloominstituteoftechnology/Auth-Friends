import React from "react"
import { Form } from "semantic-ui-react"

export const SemanticFormikField = ({ field: { name }, form: { setFieldValue, touched, errors, values }, label, ...props }) => {

    return (
        <Form.Field>
            <label>{ label }</label>
            <input
                defaultValue={values[name]}
                onChange={event => {
                    setFieldValue(name, event.target.value)
                }}
                {...props}
            />
            {touched[name] && errors[name] && <p>{errors[name]}</p>}
        </Form.Field>
    )
}