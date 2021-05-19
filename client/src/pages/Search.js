import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import { Input, SearchBtn } from "../components/SearchForm";
import ResultList from "../components/ResultList";
import Card from "../components/Card";
import Book from "../components/Book";
import { List } from "../components/List";
import Form from "../components/Form";

import API from "../utils/API";

class Search extends Component {
    state = {
        books: [],
        search: ""
    };

    searchGoogleBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                this.setState({
                    books: res.data.items,
                    search: ""
                },
                console.log(res.data))
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchGoogleBooks();
    };

    saveBook = id => {
        const book = this.state.books.find(book => book.id === id);

        API.saveBook({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
        })
            .then(() => this.searchGoogleBooks())
            .catch(err => console.log("Post err", err));
    };

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />
                    <Card title="Search">
                        <Form
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            search={this.state.search}
                        />
                    </Card>
                    <Card title="Results">
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => ( 
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
                                            Save
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

export default Search