import { ErrorMessage, FastField } from "formik";
import React from "react";
import FormikError from "./FormikError";

const Input = ({type, label, name}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <FastField type={type} className="form-control" id={name} name={name}/>
            <ErrorMessage name={name} component={FormikError}/>
        </div>
    )
}

export default Input;