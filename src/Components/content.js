import React, { Component } from 'react';

class Content extends Component {
    render() {/*Component Render Method To display content*/
        return (
            <div>
                <h1>Hello World</h1>
                <h2>It is {new Date().toLocaleTimeString()},</h2>
            </div>
        );
    }
}
export default Content;/* Export the content.js File */