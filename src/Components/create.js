import React, { Component } from 'react';
import axios from 'axios';

export class Create extends React.Component {

    constructor() {
        super();

        //Bind the onMethods
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

        //construct the created movie object's properties
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    onSubmit(e) {//Method to call when form is submitted
        e.preventDefault();//Only call when content of form is not default
        alert("Movie: " + this.state.Title
            + " Year: " + this.state.Year
            + " Poster: " + this.state.Poster);

        const newMovie = {//Create a new Movie Object with the submitted data
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }
        axios.post('http://localhost:4000/api/movies', newMovie)//Post request that will return a Promise
            .then((res) => {
                console.log(res)//If promise fulfilled, log it to console
            })
            .catch((err) => {
                console.log(err)//Otherwise log the error
            });
    }


    onChangeMovieName(e) {//add the forms title to the constructed movie object 
        this.setState({ Title: e.target.value })
    }

    onChangeMovieYear(e) {//add the forms year to the constructed movie object 
        this.setState({ Year: e.target.value })
    }

    onChangeMoviePoster(e) {//add the forms poster to the constructed movie object 
        this.setState({ Poster: e.target.value })
    }

    render() {/*Component Render Method To display create*/
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Add Movie"
                            className="btn btn-primary"
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}
