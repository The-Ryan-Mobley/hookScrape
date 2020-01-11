import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function Wrapper(props){
    const [linkFlags, linkToggle] = useState({
        sendHome: false,
        toPorfolio: false,
        toGit: false,
        toLinkedIn: false
    });
    const homeLink = (event) => {
        linkToggle({
            ...linkFlags,
            [event.target.name] : !event.target.value
        });
    }
    return(
        <Box>
            <div className="wrapper">
                <header>
                    <Grid container direction="row">
                        <h1 name="sendHome" value={linkFlags.sendHome} className="title" onClick={homeLink}>Hook Scrape</h1>
                        {linkFlags.sendHome ? (<Redirect to={"/"}/>) : (<p></p>)}
                    </Grid>
                </header>
                <Container>
                    {props.children}
                </Container>
                <Grid container direction ="row">
                    <footer>
                        <Grid item container xs={12} direction="row" justify="center" spacing={1}>
                            <Grid item xs={2}>
                                <a href="http://www.myryanmobley.com/" className="portfolio">created by: Ryan Mobley</a>
                            </Grid>
                            <Grid item xs={1}>
                            <a href="https://github.com/The-Ryan-Mobley" className="small-box" id="firstbox">
                                <img className="linkbox" id="github" src="/github.png" alt="mygithub"/>
                            </a>
                            
                            <a href="https://www.linkedin.com/in/ryan-mobley-b843b5186/" className="small-box">
                                <img className="linkbox" id="linked-in" src="/5a22d420c9a5a7.416105621512231968826.png"
                                alt="ln"/>
                            </a>
                            </Grid>
                        </Grid>
                    </footer>

                </Grid>

            </div>
        </Box>
    )
}