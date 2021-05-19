import React, { Component } from "react";
import Book from "../Book";

class ResultList extends Component {
  render() {
    return (
      this.props.bookState.map((book) => (
        <Book
          key={book._id}
          id={book._id}
          title={book.volumeInfo.title}
          link={book.volumeInfo.previewLink}
          authors={book.volumeInfo.authors}
          image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks : "https://via.placeholder.com/150"}
          description={book.description}
          saveBook={this.props.saveBook}
        />
      ))
    )
  }
}

export default ResultList