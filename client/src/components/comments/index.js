import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import api from "../../utils/api/api";

export default function Comment(props){
    const [replies, setReplies] = useState([]);
    const [expandFlag, toggleFlag] = useState(false);
    console.table(props.comment._id);
    const queryReplies = async () => {
        const result = await api.getComments(props.comment._id);
        if(result){
            if(result.data.length > 2){
                toggleFlag(true);
            }
            setReplies(result.data);
            
        }
    }
    const modalControl = (event) => {
        props.modalControl(event);
    }
    useEffect( () =>{
        queryReplies();

    },[])
    const expandReplies = () => {
        toggleFlag(!expandFlag);
    }
    return (
            <Grid item container xs={12} direction = "column" justify = "flex-start" alignItems="flex-start">
                <p><strong>{props.comment.userName}:</strong><br/>
                {props.comment.body}</p>
                <Button value={props.comment._id} onClick={modalControl.bind(props.comment._id)}>reply</Button>
                <Grid item container xs={12}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={11}>
                        {expandFlag ? (<Button onClick={expandReplies}>View {replies.length} Replies</Button>) : (
                            <div className="replies">
                                {replies.length ? (replies.map((reply, index)=>(
                                    <div className="reply">
                                    <Comment key={index} comment = {reply} modalControl={props.modalControl}></Comment>
                                    </div>
                                ))) : (<p></p>)}
                            </div>
                        )}
                    </Grid>
                </Grid>
            </Grid>
            
    )
}