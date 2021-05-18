import React, {Component} from "react";

class Book extends Component { 
    state = { 
        mounted:false,
    }

    componentDidMount = () => { 
        this.state({ 
            mounted:true
        })
    }

    onClick = () => { 
        this.props.saveBook(this.props)
    }

    render() { 
        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={this.props.image} alt="bookcover" />
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text" >{this.props.description}</p>
                    <p >Author(s): {this.props.authors}</p>
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View</a>
                    <button onClick={this.onClick} className="btn btn-success">Delete</button>
                </div>
            </div>
        </div>
    }
}

export default Book;