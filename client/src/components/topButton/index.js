import React, { useState, useEffect  } from 'react';
import Button from '@material-ui/core/Button';

export default function TopButton(props){
    const top = () => {
        window.scrollTo(0,0);
    }
    return (
        <div className="topButton">
            <Button variant="contained" color="primary" onClick={top}>Back to Top</Button>
        </div>
    )
}