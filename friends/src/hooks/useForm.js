import { useState } from "react";

const useForm = (initForm, submitFunc) => {
    const [form, setForm] = useState(initForm)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit  = (e) => {
        e.preventDefault();
        //console.log(form);
        submitFunc();
        setForm(initForm);
       
    }

    return ([form, handleChange, handleSubmit]);

}

export default useForm;