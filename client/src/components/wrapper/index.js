import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function Wrapper(props){
    const [sendHome, linkToggle] = useState(false);
    const homeLink = () => {
        linkToggle(true);
    }
    return(
        <Box>
            <div className="wrapper">
                <header>
                    <Grid container direction="row">
                        <h1 className="title" onClick={homeLink}>Hook Scrape</h1>
                        {sendHome ? (<Redirect to={"/"}/>) : (<p></p>)}
                    </Grid>
                </header>
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