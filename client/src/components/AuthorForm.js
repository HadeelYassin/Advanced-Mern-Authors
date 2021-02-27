import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const { initialName , onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }
        
    return (
        <center>
             <h2>Favorite Authors</h2>
           {
                initialName==""
                ?<p>Add a new author</p>
                :<p>Edit this author</p>
               
           }
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br />
                <input 
                    type="text" 
                    name="name" value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
        {props.errors.map((err, index) => <p key={index}>{err}</p>)}
        </center>
    )
}
