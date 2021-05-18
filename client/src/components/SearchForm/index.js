import React from 'react'
import "./style.css";

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}

export function SearchBtn(props) {
    return (
        <button {...props} className="btn btn-success">Search</button>
    )
}