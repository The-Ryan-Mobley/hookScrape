import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import api from "../../utils/api/api";
import { STATES } from 'mongoose';

export default function PostComment(props){
    const [newComment, newInput] = useState({name: "", body: "", postId: props.id})
    const [errorMessage, setError] = useState("");


    
    const closeModal = () => {
        props.closeToggle();
    }
    const inputChangeHandler = (event) => {
        newInput({
            ...newComment,
            [event.target.name]: event.target.value
        });
        console.log(newComment);
    }
    const submitComment = async () => {
        const result = await api.postComment(newComment);
        if(result) {
            newInput({
                name: "",
                body: ""
            });

        } else {
            setError("Something went wrong");
        }
    }
    return (
        <Grid item container xs={12} direction="column">
            <div className="modalBody">
            <Grid item container xs={12} direction="row-reverse">
                <Button onClick={closeModal}>X</Button>
            </Grid>

            {errorMessage.length ? (<p>{errorMessage}</p>) : (<p></p>)}
            <Grid item xs={12}>
                <TextField
                    id="standard-multiline-static"
                    label="Name*"
                    defaultValue=""
                    fullWidth={true}
                    margin="normal"
                    variant="filled"
                    name="name"
                    onChange={inputChangeHandler}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="standard-multiline-static"
                    label="Comment*"
                    multiline
                    rows="5"
                    defaultValue=""
                    fullWidth={true}
                    margin="normal"
                    variant="filled"
                    name="body"
                    onChange={inputChangeHandler}
                />
            </Grid>
            <Button onClick={submitComment} disabled={newComment.name, newComment.body}>Post</Button>
            </div>
        </Grid>
    )
}