import React, { useState, useEffect, useRef } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import api from "../utils/api/api";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Wrapper from "../components/wrapper";
import Post from "../components/post";
import CommentModal from "../components/commentModals";

export default function Home(props){
    const [scrapedPost, setPost] = useState([]);
    const [modalFlag, setModal] = useState(false);
    const [postId, setPostId] = useState("");

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
    useEffect(()=>{
        if(postId.length) {
            console.log(postId);
            
        }
    },[postId])
    const ModalToggle = (id) => {
        setPostId(id);
        setModal(!modalFlag);  
    }
    const closeToggle = () => {
        setPostId("");
        setModal(!modalFlag); 
    }
    
    return (
        <Wrapper>
            <Grid container>
                {scrapedPost.length ? (
                    scrapedPost.map(i => (
                        <div className="postBody">
                            <Post
                                key={i._id}
                                data={i}
                            />
                        </div>
                    ))
                ) : (<p></p>)}

                
            </Grid>
        </Wrapper>
    )
}