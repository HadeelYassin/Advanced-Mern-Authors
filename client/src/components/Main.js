import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router,Link } from '@reach/router';
import DeleteButton from './DeleteButton'
import '../styles/main.css'
export default () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then(res => setAuthors(res.data)
            )

    }, []);
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }
    return (
        <center>
            <h2>Favorite Authors</h2>
            <Link to="/new">Add a new author</Link>
            <table class="table trial">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions Available</th>

                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, idx) => {
                        return <tr key={idx}>
                            <td>{author.name}</td>
                            <td> <Link class="link1" to={"/edit/" + author._id }>
                                Edit
                        </Link>
                        |
                       <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} /></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </center>

    )
}