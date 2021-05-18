import React, { Component } from "react";
import Book from "../Book/Book";

class ResultList extends Component { 
    render() { 
        return (
            this.props.bookState.map((book) => (
                <Book
                    id={book._id}
                    key={book._id}
                    title={book.volumeInfo.title}
                    link={book.volumeInfo.previewLink}
                    authors={book.volumeInfo.authors}
                    image={book.volumeInfo.imageLinks ? volumeInfo.imageLinks : "https://via.placeholder.com/150"}
                    description={book.volumeInfo.description}
                    saveBook={this.props.saveBook}
                />
            ))
        )
    }
}

export default ResultList