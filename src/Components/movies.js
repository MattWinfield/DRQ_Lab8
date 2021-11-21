import React, { Component } from 'react';
import { Movieitem } from './movieitem';

export class Movies extends React.Component {
    render() {/*Component Render Method To display Movies*/
        return this.props.movies.map((movie) => {/*For every movie in the Read Array, return a Movie Item Component*/
            return <Movieitem movie={movie}></Movieitem>
        })
    }
}
