import React, { Component } from "react";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Nav from "../components/Nav/Nav";
import SavedList from "../components/SavedList/SavedList";

import API from "../utils/API";

class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount = () => {
        this.getBooks();
    };

    deleteBook = selectedBook => {
        API.deleteBook(selectedBook.id)
            .then(res => {
                console.log("Book deleted from DB!", res)
                this.getBooks();
            })
            .catch(err => {
                console.log(err);
            })
    };

    getBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({
                    savedBooks: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />
                    {this.state.savedBooks.length ? (
                        <SavedList
                            bookState={this.state.savedBooks}
                            deleteBook={this.deleteBook}
                        >
                        </SavedList>
                    ) : (
                        <div>
                            <hr />
                            <p>No results to display</p>
                        </div>
                    )}
                </Container>
            </div>
        )
    }
}

export default Saved