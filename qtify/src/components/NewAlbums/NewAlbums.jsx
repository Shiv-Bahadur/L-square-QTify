import React,{useState,useEffect} from 'react'
import { Box, Button } from '@mui/material';
import axios from 'axios'
import Carousel from '../Swiper/Carousel';
import ShowAll from '../ShowAll/ShowAll';

const NewAlbums = () => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [albums, setAlbums] = useState([])

    const fetchNewAlbums = async () => {
        try {
            const res = await axios.get('https://qtify-backend.labs.crio.do/albums/new')
            console.log(res)
            setAlbums(res.data)
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        console.log("data fetching is in progress")
        fetchNewAlbums()
    }, [])
    return (
         <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                <h2  style={{color:'white'}}>New Albums</h2>
                <Button variant="text" onClick={() => setIsCollapsed(!isCollapsed)}>{isCollapsed ? "Show All" : "Collapsed"}</Button>
            </Box>

            {isCollapsed ? <Carousel albums={albums} />: <ShowAll albums={albums} />}
        </Box>
    )
}
export default NewAlbums;
