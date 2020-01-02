import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import api from "../utils/api/api";
import { STATES } from 'mongoose';

export default function CommentThread(props){
    const [comments, setComments] = useState([]);
    const [newComment, newInput] = useState({name: "", body: "", postId: props.match.params.commentId})
    const [errorMessage, setError] = useState("");

    const queryComments = async () => {
        const result = await api.getComments(props.match.params.commentId)
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
            <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="sheetModal"
                    name="sheetModal"
                    open={modalFlag}
                    onClose={closeToggle}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 100,
                    }}
                >
                    <Fade in={modalFlag}>
                        <CommentModal 
                            id = {postId}
                            closeToggle = {closeToggle}
                        />        
                    </Fade>
                </Modal>
            </div>
        </Grid>
    )
}