import React, { Component } from 'react';
import { Movies } from './movies';
import axios from 'axios';//Import Axios to Utilise JSON Promises

export class Read extends React.Component {

    state = {//A Variable to store JSON Data 
        movies: []
    };

    componentDidMount() {//A Method that will invoke immediately after this component gets mounted
        axios.get("http://localhost:4000/api/movies")
            .then(//returns this method if promise is fulfilled
                (response) => {
                    //update the state variable with the promised JSON BLOB
                    this.setState({ movies: response.data })
                }
            )
            .catch(//returns this method if promise is not fulfilled
                (error) => {
                    console.log(error)//log the promise error to the console
                }
            );
    }

    render() {/*Component Render MethSod To display Read*/
        return (
            <div>
                <h1>This is my Read Component</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}
