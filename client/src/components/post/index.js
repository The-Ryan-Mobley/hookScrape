import React, { useState, useEffect  } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function Post(props){
    const sendToThread = () => {
        window.location = props.data.discussion;
    }
    const openModal = () => {
        props.modalToggle(props.data._id);
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
                <div class="button-group">
                    <Button onClick={sendToThread}>View Thread</Button>
                    <Button name={props.data._id} onClick={openModal}>Comments</Button>
                </div>
            </Grid>
            

        </Grid>
    )
}