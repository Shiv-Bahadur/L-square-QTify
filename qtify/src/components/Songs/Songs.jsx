import { Box, Tabs, Tab } from '@mui/material';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Carousel from '../Swiper/Carousel';

const Songs = () => {
  const [songs, setSongs] = useState([])
  const [genre, setGenre] = useState([])
  const [value, setValue] = useState('');
  const [filteredSong, setFilteredSong] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const filtered = songs.filter((song) => song.genre.key === newValue)
    setFilteredSong(filtered)
  };



  const fetchSongs = async () => {
    try {
      const res = await axios.get('https://qtify-backend.labs.crio.do/songs')
      setSongs(res.data)
      setFilteredSong(res.data)
      const response = await axios.get("https://qtify-backend.labs.crio.do/genres")
      setGenre(response.data.data)
    } catch (err) {
      console.log(err)
    }

  }
  useEffect(() => {
    console.log("data fetching is in progress")
    fetchSongs()
  }, [])
  return (
    <Box>
      <h2 style={{ padding: '0.5rem 2rem', color: 'white' }}>Songs</h2>
      <Box sx={{ width: '100%', marginBottom: '2rem' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          sx={{
            '& .MuiTab-root': {
              color: 'white', // default text color
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#34C94B', // indicator color
            },
          }}
        >
          <Tab value="" label="All" />
          {
            genre.map((item) => (
              <Tab value={item.key} label={item.label} key={item.key} />
            ))
          }
        </Tabs>
      </Box>
      <Carousel albums={filteredSong} />
    </Box>
  )
}
export default Songs;
