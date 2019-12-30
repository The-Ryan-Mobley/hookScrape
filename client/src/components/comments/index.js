import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import api from "../../utils/api/api";

export default function Comment(props){
    return (
        <Grid container>
            <div className="comment">
                <Grid item container xs={12} direction = "column">
                    <p><strong>{props.comment.userName}:</strong><br/>
                    {props.comment.body}</p>
                    <Button>reply</Button>
                </Grid>
            </div>
            <Grid item xs={1}></Grid>
            <Grid item xs={11}>
                <div className="replies">
                    {props.replies.length ? (props.replies.map((reply, index)=>{
                        <Comment key={index} comment = {reply}></Comment>
                    })) : (<p></p>)}
                </div>
            </Grid>
        </Grid>
    )
}