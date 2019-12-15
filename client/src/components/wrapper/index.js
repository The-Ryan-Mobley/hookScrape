import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function Wrapper(props){
    return(
        <Box>
            <div className="wrapper">
                <Grid container direction="row">
                    <h1>Top Text</h1>
                </Grid>
                <Container>
                    {props.children}
                </Container>
                <Grid container direction ="row">
                    <footer>
                        <h1>BOTTOM TEXT</h1>
                    </footer>

                </Grid>

            </div>
        </Box>
    )
}