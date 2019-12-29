import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import api from "../../utils/api/api";

export default function ViewComment(props){
    const [comments, setComments] = useState([]);
    const [newComment, newInput] = useState({name: "", body: "", postId: props.id})
    const queryComments = async () => {
        const result = await api.getComments(props.id)
        if(result){
            setComments(result.data);
        }
    }
    useEffect( ()=> {
        queryComments();
    }, []);
    
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
            queryComments();

        } else {
            console.log("ERRRRRRR");
        }
    }
    return (
        <Grid item container xs={12} direction="column">
            <div className="modalBody">
            <Grid item xs={12} direction="row-reverse">
                <Button onClick={closeModal}>X</Button>
            </Grid>
            
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
            <Button onClick={submitComment}>Post</Button>
            <Grid item xs={12}>
                {comments.length ? (comments.map(comment => (
                    <div className="comment">
                        <Grid item container xs={12} direction = "column">
                            <p><strong>{comment.userName}:</strong><br/>
                            {comment.body}</p>
                        </Grid>
                    </div>
                ))) : (<p></p>)}

            </Grid>
            </div>
        </Grid>
    )
}