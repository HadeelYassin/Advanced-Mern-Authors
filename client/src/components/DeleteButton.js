import React from 'react'
import axios from 'axios';
import '../styles/main.css'
export default props => {
    const { authorId, successCallback } = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button class="button1" onClick={deleteAuthor}>
            Delete
        </button>
    )
}
