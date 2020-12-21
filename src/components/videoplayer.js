import React from 'react';
import {Paper,Typography} from '@material-ui/core';
function Videoplayer({video}) {
    
    if(!video) return <div>Loading...</div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    console.log(video)
    const videoId = video.id.videoId;
    console.log(videoId)
    return (
        <React.Fragment>
            <Paper elevation={6} style={{height:"40%" }}>
                <iframe  height="100%" width="100%" title="video title" src= {videoSrc} />
                </Paper>
                <Paper elevation={6} style={{padding:'15px'}}>
                    <Typography variant="h5">{video.snippet.title}</Typography><br/>
                    <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>

           
        </React.Fragment>
    );
}

export default Videoplayer;