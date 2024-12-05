import React from "react";

const FormikError = ({children}) => {
    return (
        <small className="d-block text-danger">
            {children}
        </small>
    )
}

export default FormikError;