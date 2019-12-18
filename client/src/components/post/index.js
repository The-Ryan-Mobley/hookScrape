import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
export default function Post(props){
    return (
        <Grid container item direction="row-reverse">
            <Grid item xs={12} md={10}>
            <a 
                className='headline' 
                href={props.data.link}
            >
                <strong>{props.data.Title}</strong>
            </a>

            </Grid>
            <Grid item xs={12} md={2}>
                <div className="image-container">
                    <img 
                        src={props.data.thumbnail} 
                        alt="reddit-icon" 
                        className="thumbnail shadowed"
                    />

                </div>
                
            </Grid>
            

        </Grid>
    )
}