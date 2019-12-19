import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function ViewComment(props){
    const [comments, setComments] = useState([]);
    useEffect(()=> {

    },[]);
    return (
        <Grid item container xs={12} direction="column">
            <div className="modalBody">
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
                    <div></div>
                ))) : (<p></p>)}

            </Grid>
            </div>
        </Grid>
    )
}