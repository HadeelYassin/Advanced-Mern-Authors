import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';
export default () => {
    const [errors,setErrors]=useState([]);
    const createAuthor = author => {
            axios.post("http://localhost:8000/api/author", author)
                .then(res =>{
                    navigate("/");
                })
                .catch(err=>{
                    const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                    const errorArr = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                    // Set Errors
                    setErrors(errorArr);
                }) 
        }
            
    return (
        <div>
       
           <AuthorForm  errors={errors} onSubmitProp={createAuthor} initialName="" />
        </div>
    )
}
