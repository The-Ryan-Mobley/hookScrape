import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import api from "../../utils/api/api";

export default function ViewComment(props){
    const [comments, setComments] = useState([]);
    useEffect(async ()=> {
        const result = await api.getComments(props.id)
        if(result){
            setComments(result);
        }
        
    }, []);
    const closeModal = () => {
        props.modalToggle(props.id);
    }
    return (
        <Grid item container xs={12} direction="column">
            <div className="modalBody">
            <Grid item xs={12} direction="row-reverse">
                <Button onclick={closeModal}>X</Button>
            </Grid>
            
            <Grid item xs={12}>
                <TextField
                    id="standard-multiline-static"
                    label="Name*"
                    defaultValue="Default Value"
                    fullWidth={true}
                    margin="normal"
                    variant="filled"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="standard-multiline-static"
                    label="Comment*"
                    multiline
                    rows="5"
                    defaultValue="Default Value"
                    fullWidth={true}
                    margin="normal"
                    variant="filled"
                />
            </Grid>
            <Grid item xs={12}>
                {comments.length ? (comments.map(comment => (
                    <div className="comment">
                        <Grid item container xs={12} direction = "column">
                            <p>{comment.userName}</p>
                            <p>{comment.body}</p>
                        </Grid>
                    </div>
                ))) : (<p></p>)}

            </Grid>
            </div>
        </Grid>
    )
}