import React from "react";
import Input from "./Input";
import Date from "./Date";

const FormikControl = (props) => {
    switch(props.control) {
        case "input":
            return <Input {...props}/>
        case "date":
            return <Date {...props}/>
        default:
            return null        
    }
}

export default FormikControl;