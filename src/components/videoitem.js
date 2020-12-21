import { Grid } from '@material-ui/core';
import React from 'react';
import {Typography, Paper,TextField } from '@material-ui/core';
function Videoitem({video , onVideoSelect}) {
    return (
       <Grid item xs={12} style={{height:"50%"}}>
           <Paper style={{ display:"flex", alignItems:"center", cursor:"pointer"}} 
           onClick={()  => onVideoSelect(video)}>
              
               <img style={{marginRight:"20px"}} src={video.snippet.thumbnails.medium.url} alt="thumbnails"/>
               </Paper>
                <Typography  variant="subtitle1">
                   <b>{video.snippet.title}</b> 
                </Typography>
          

     </Grid>
    );
}

export default Videoitem;