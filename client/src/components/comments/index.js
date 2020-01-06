import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import api from "../../utils/api/api";

export default function Comment(props){
    const [replies, setReplies] = useState([]);
    console.table(props.comment._id);
    const queryReplies = async () => {
        const result = await api.getComments(props.comment._id);
        if(result){
            setReplies(result.data);
        }
    }
    const modalControl = (event) => {
        props.modalControl(event.currentTarget.value);
    }
    useEffect( () =>{
        queryReplies();

    },[])
    return (
        <Grid container>
            <div className="comment">
                <Grid item container xs={12} direction = "column">
                    <p><strong>{props.comment.userName}:</strong><br/>
                    {props.comment.body}</p>
                    <Button value={props.comment._id} onClick={modalControl.bind(props.comment._id)}>reply</Button>
                </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
                <div className="replies">
                    {replies.length ? (replies.map((reply, index)=>(
                        <Comment key={index} comment = {reply} modalControl={props.modalControl}></Comment>
                    ))) : (<p></p>)}
                </div>
            </Grid>
            </div>
            
        </Grid>
    )
}