import React from 'react'

function TextInputGroup(props) {
    return (
        <div>
            <div className="form-group">
                <label htmlFor={props.name}>{props.label}</label>
                <input type={props.type} className="form-control"
                name={props.name}
                Value={props.value}
                onChange={props.onChange}
                />
            </div>  
        </div>
    )
}
export default TextInputGroup ;