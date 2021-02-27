import React from 'react'
import { Router,Link } from '@reach/router';
const Error = () => {
    return (
        <center>
            <h2>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h2>
            <Link to="/new">Add a new Author</Link>
        </center>
    )
}

export default Error
