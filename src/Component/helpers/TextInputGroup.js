import React from 'react'
import classnames from 'classnames'

function TextInputGroup(props) {
    return (
        <div>
            <div className="form-group">
                <label htmlFor={props.name}>{props.label}</label>
                <input type={props.type} 
                className={classnames('form-control',{
                    'is-invalid': props.error
                })}
                name={props.name}
                Value={props.value}
                onChange={props.onChange}
                />
            </div>  
            <div className="invalid-feedback">{props.error}</div>
        </div>
    )
}
export default TextInputGroup ;