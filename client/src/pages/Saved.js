import React, { Component } from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import SavedList from "../components/SavedList";
import Card from "../components/Card";
import Book from "../components/Book";
import {List }from "../components/List";

import API from "../utils/API";

class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount = () => {
        this.getSavedBooks();
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => {
                console.log("Book deleted from DB!", res)
                this.getSavedBooks();
            })
            .catch(err => {
                console.log(err);
            })
    };

    getSavedBooks = () => {
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
                    <Card title="Saved">
                        {this.state.savedBooks.length ? (
                            <List>
                                {this.state.savedBooks.map(book => ( 
                                    <Book
                                    key  = {book.id}
                                    title = {book.volumeInfo.title}
                                    authors = {book.volumeInfo.authors.join(", ")}
                                    link = {book.volumeInfo.infoLink}
                                    description = {book.volumeInfo.description}
                                    image = {book.volumeInfo.imageLinks.thumbnail}
                                    Button = { () => (
                                        <button
                                        onClick = { () => this.saveBook(book.id)}
                                        >
                                            Delete
                                        </button>
                                    )}
                                    />
                                ))}
                            </List>
                                
                        ) : (
                            <div>
                                <hr />
                                <p>No results to display</p>
                            </div>
                        )}
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Saved