import React from 'react';
import { Grid} from '@material-ui/core';
 import Videoitem from './videoitem'

function Videosuggestions({videos,onVideoSelect}) {
    console.log("in video sugg")
    //console.log(videos)
    const listOfVideos = videos.map((video,id ) => <Videoitem  key={id} video={video} onVideoSelect={onVideoSelect}/> )
    return (
        <Grid container spacing={10}>
         {listOfVideos}
         </Grid>
    );
}

export default Videosuggestions;