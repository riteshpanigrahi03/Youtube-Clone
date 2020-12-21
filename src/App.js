import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import youtube from './api/youtube';
import Searchbar from './components/searchbar'
import Videoplayer from './components/videoplayer'
import Videosuggestions from "./components/videosuggestions";

function App() {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [apiCount , setApiCount] = useState(0);
  const handleSubmit = async (searchValue) => {
    const response = await youtube.get('search', { params: { q: searchValue } })
    console.log(`responses == ${response.data.items.slice(1,5)}`);
    setVideoList(response.data.items.slice(1,5));
    setSelectedVideo(response.data.items[0]);
    setApiCount(apiCount+1);
    console.log(`api called ${apiCount}`);

  }
  const onVideoSelect = (video) => {
    console.log("app.js onvideoselect");
    console.log(video)
    setSelectedVideo(video);
  }
  useEffect(() => {
    console.log("use effect");
    handleSubmit("React js");
  },[])


  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={8}>
            <Searchbar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8} >
            <Videoplayer video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <Videosuggestions videos={videoList} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default App;


