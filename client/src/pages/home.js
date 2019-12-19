import React, { useState, useEffect, useRef } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import api from "../utils/api/api";
import Modal from '@material-ui/core/Modal';

import Wrapper from "../components/wrapper";
import Post from "../components/post";

export default function Home(props){
    const [scrapedPost, setPost] = useState([]);
    useEffect(()=> {
        const queryPost = async () => {
            const query = await api.getPosts("http://old.reddit.com/r/todayilearned");
            if(query){
                setPost(query.data);
                console.log(query.data);
            }
        }
        queryPost();
    }, []);
    return (
        <Wrapper>
            <Grid container>
                {scrapedPost.length ? (
                    scrapedPost.map(i => (
                        <Post
                            key={i._id}
                            data={i}
                        />
                    ))
                ) : (<p></p>)}
            </Grid>
        </Wrapper>
    )
}