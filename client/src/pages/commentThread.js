import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Post from "../components/post";
import Wrapper from "../components/wrapper";

import api from "../utils/api/api";
import { STATES } from 'mongoose';

export default function CommentThread(props){
    const [comments, setComments] = useState([]);
    const [newComment, newInput] = useState({name: "", body: "", postId: props.match.params.commentId})
    const [errorMessage, setError] = useState("");
    const [modalFlag, toggleFlag] = useState(false);
    const [postData, setData] = useState({});

    

    const queryComments = async () => {
        const result = await api.getComments(props.match.params.commentId)
        if(result){
            setComments(result.data);
        }
    }
    const queryPost = async () => {
        console.log(props.match.params.commentId);
        const result = await api.loadPost(props.match.params.commentId);
        if(result) {
            console.log(result);
            setData(result.data[0]);
        }
    }
    useEffect( ()=> {
        queryComments();
        queryPost();
    }, []);
    
    
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
    const modalControl = () => {
        toggleFlag(!modalFlag);
    }
    return (
        <Wrapper>
            <Grid container>
                <Grid item xs={12}>
                    <div className="postBody">
                        {postData ? (
                            <Post 
                                data={postData}
                                listed={false}
                            />
                        ) : (<p></p>)}
                        <Button onClick={modalControl}>Leave a Comment</Button>
                    </div>
                    
                </Grid>
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
                    onClose={modalControl}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 100,
                    }}
                >
                    <Fade in={modalFlag}>
                        <div className="modalBody">
                        <Grid item container xs={12} direction="column">
                            <Grid item container xs={12} direction="row-reverse">
                                <Button onClick={modalControl}>X</Button>
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
                            <Button onClick={submitComment} disabled={!(newComment.name), !(newComment.body)}>Post</Button>
                        </Grid>
                        </div>
                    </Fade>
                </Modal>
            </Grid>
        </Wrapper>
    )
}
/*
                
*/