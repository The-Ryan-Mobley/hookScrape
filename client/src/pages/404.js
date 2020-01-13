import React, { useState, useEffect  } from 'react';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Post from "../components/post";
import Wrapper from "../components/wrapper";
import Comment from "../components/comments";
import CommentModal from "../components/commentModals";

export default function NotFound(){
    const [goHome, setHome] = userState(false);
    const sendHome = () => {
        setHome(!goHome);
    }
    return (
        <Wrapper>
            <Grid container>
                <Grid item container xs={12}>
                    <div className="userComments">
                        <Grid item xs={12} alignItems="center" justify="center">
                            <h1>OOPS</h1>
                            <p>It looks like this page doesn't exist</p>
                            <Button variant="outlined" onClick={sendHome}>return home</Button>
                            {goHome ? (<Redirect to={"/"}/>) : (<p></p>)}
                        </Grid>


                    </div>
                </Grid>
            </Grid>
        </Wrapper>
    )
}