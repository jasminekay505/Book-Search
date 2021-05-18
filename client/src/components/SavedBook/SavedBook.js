import React from "react";
import "./style.css";

function SavedBook(props) {
    const { title, authors, image, link, description, deleteBook } = props
    return (
        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={image} alt="bookcover" />
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" >{description}</p>
                    <p >Author(s): {authors}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn">View</a>
                    <button onClick={deleteBook.bind(this, props)} className="btn btn-success">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default SavedBook