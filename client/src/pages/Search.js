import React, { Component } from "react";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Nav from "../components/Nav/Nav";
import { Input, SearchBtn } from "../components/SearchForm/SearchForm";
import ResultList from "../components/ResultList/ResultList";

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
                })
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

    saveBook = selectedBook => {
        API.saveBook({
            id: selectedBook.id,
            title: selectedBook.title,
            authors: selectedBook.authors,
            description: selectedBook.description,
            image: selectedBook.image,
            link: selectedBook.link
        })
            .then(res => console.log("Book posted to DB", res))
            .cath(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />
                    <form>
                        <h5>Search for books</h5>
                        <Input
                            value={this.state.search}
                            onChange={this.handleInputChange}
                            name="search"
                            placeholder="The Way of Kings"
                        />
                        <SearchBtn onClick={this.handleFormSubmit} />
                    </form>

                    {this.state.books.length ? (
                        <ResultList
                            bookState={this.state.books}
                            saveBook={this.saveBook}>
                        </ResultList>
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

export default Search