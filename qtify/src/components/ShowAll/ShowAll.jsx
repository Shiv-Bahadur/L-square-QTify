import React from 'react'
import { Box, Grid } from '@mui/material';
import SongCard from '../Card/Card';

 const ShowAll = ({albums}) => {
  return (
    <Box>
        <Grid container gap={6} marginLeft={"2.5rem"} marginRight={"2.5rem"}>
            {
                albums.length>0 && albums.map((album)=>(
                <Grid item key={album.id}><SongCard album={album}/></Grid>
            ))
            }

        </Grid>
    </Box>
  )
}
export default ShowAll;