import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Post from "../components/post";
import Wrapper from "../components/wrapper";
import Comment from "../components/comments";
import CommentModal from "../components/commentModals";

import api from "../utils/api/api";
import { STATES } from 'mongoose';

export default function CommentThread(props){
    const [comments, setComments] = useState([]);
    const [stateObj, setStateObj] = useState({
        postId: props.match.params.commentId, 
        modalFlag: false, 
        errorMessage: ""
    })
    const [postData, setData] = useState({});
    const queryComments = async () => {
        const result = await api.getComments(props.match.params.commentId)
        if(result){
            setComments(result.data);
        }
    }
    const queryPost = async () => {
        const result = await api.loadPost(props.match.params.commentId);
        if(result) {
            setData(result.data[0]);
        }
    }
    useEffect( ()=> {
        queryComments();
        queryPost();
        
    }, []);
    const modalControl = (event) => {
        setStateObj({
            ...stateObj,
            modalFlag: !stateObj.modalFlag,
            postId: event.currentTarget.value
        });
    }
    const modalClose = () => {
        setStateObj({
            ...stateObj,
            modalFlag: !stateObj.modalFlag
        })
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
                        <Button value={props.match.params.commentId} onClick={modalControl}>Leave a Comment</Button>
                    </div>
                    
                </Grid>
                <Grid item container xs={12} direction="column">
                    <h1>Discussion</h1>
                    {comments.length ? (comments.map(comment => (
                        <Comment comment={comment} modalControl={modalControl} />
                    ))) : (<p></p>)}
                </Grid>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="sheetModal"
                    name="sheetModal"
                    open={stateObj.modalFlag}
                    onClose={modalControl}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 100,
                    }}
                >
                    <Fade in={stateObj.modalFlag}>
                        <CommentModal 
                            closeToggle = {modalClose}
                            postId={stateObj.postId}
                        />
                    </Fade>
                </Modal>
            </Grid>
        </Wrapper>
    )
}
/*
                
*/