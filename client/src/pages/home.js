import React, { useState, useEffect, useRef } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import api from "../utils/api/api";

import Wrapper from "../components/wrapper";
import Post from "../components/post";

export default function Home(props){
    const [scrapedPost, setPost] = useState([]);
    useEffect(()=> {
        const scrapeAndSet = async () => {
            const result = await api.scrape("http://old.reddit.com/r/todayilearned");
            if(result){
                const query = await api.getPosts("http://old.reddit.com/r/todayilearned");
                if(query){
                    console.log("CALLED IT");

                    setPost(query.data);
                    
                }
                
            }


        }
        scrapeAndSet();
        
    }, []);
    return (
        <Wrapper>
            <Grid container>
                {scrapedPost.length ? (
                    scrapedPost.map(i => (
                        <Post
                            title = {i.title}
                        />
                    ))
                ) : (<p></p>)}
            </Grid>
        </Wrapper>
    )
}