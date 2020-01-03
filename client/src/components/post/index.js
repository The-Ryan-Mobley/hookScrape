import React, { useState, useEffect  } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function Post(props){
    const [redirectFlag, setFlag] = useState(false);
    const sendToThread = () => {
        window.location = props.data.discussion;
    }
    const triggerFlag = () => {
        setFlag(!redirectFlag);
    }
    return (
        <Grid container item direction="row-reverse">
            <Grid item xs={12} md={10}>
                <a 
                    className='headline' 
                    href={props.data.link}
                >
                    <strong>{props.data.Title}</strong>
                </a>
                <p className="author">Submitted by: {props.data.author}</p>
            </Grid>
            
            <Grid item xs={12} md={2}>
                <div className="image-container">
                    <img 
                        src={props.data.thumbnail} 
                        alt="reddit-icon" 
                        className="thumbnail shadowed"
                    />
                    <p className="karma">karma: {props.data.karma}</p>

                </div>
                
            </Grid>
            <Grid item xs={12} md={10}>
                {props.parent ? (
                    <div class="button-group">
                        <Button onClick={sendToThread}>View Thread</Button>
                        {redirectFlag ? (
                            <Redirect to={"/comments/"+props.data._id}/>
                            ) : (
                            <Button name={props.data._id} onClick={triggerFlag}>Comments</Button>)}
                    </div>
                ) : (<p></p>)}
            </Grid>
            

        </Grid>
    )
}