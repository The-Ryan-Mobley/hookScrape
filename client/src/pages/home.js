import React, { useState, useEffect  } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import api from "../utils/api/api";

import Wrapper from "../components/wrapper";

export default function Home(props){
    const [post, setPost] = useState(0);
    useEffect(()=> {
        api.scrape("http://old.reddit.com/r/todayilearned").then((re) => {
            console.log(re);

        });
    })
    return (
        <Wrapper
        />
    )
}