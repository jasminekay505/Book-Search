import React, { Component } from "react";
import SavedBook from "../SavedBook/SavedBook";

class SavedList extends Component {
    render() {
        return (
            this.props.bookState.map((book) => (
                <SavedBook
                    id={book._id}
                    key={book._id}
                    title={book.title}
                    link={book.link}
                    authors={book.authors}
                    image={book.image ? book.image : "https://via.placeholder.com/150"}
                    description={book.description}
                    deleteBook={this.props.deleteBook}
                />
            ))
        )
    }
}

export default SavedList