import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';
import Error from '../components/Error'
export default (props) => {
const { id } = props;
const [author, setAuthor] = useState();
const [errors,setErrors]=useState([]);
const [loaded, setLoaded] = useState(false);
useEffect(() => {
    axios.get('http://localhost:8000/api/author/' + id)
        .then(res => {
            setAuthor(res.data);
            setLoaded(true);
        })
        .catch()
}, [])
const updateAuthor = author => {
    axios.put('http://localhost:8000/api/author/' + id, author)
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
if(author!=null){
    return(
        <div>
         {loaded && ( <AuthorForm
                    onSubmitProp={updateAuthor}
                    initialName={author.name}
            errors={errors}
                />)}   
        </div>
        
               
        
    )
}
else{
    return(
       <Error/>
    )
}

}


