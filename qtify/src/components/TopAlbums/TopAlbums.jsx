import React,{useEffect,useState} from 'react'
import { Box, Button } from '@mui/material';
import axios from 'axios'
import Carousel from '../Swiper/Carousel';
import ShowAll from '../ShowAll/ShowAll';

const TopAlbums = () => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [albums, setAlbums] = useState([])

    const fetchTopAlbums = async () => {
        try {
            const res = await axios.get('https://qtify-backend.labs.crio.do/albums/top')
            console.log(res)
            setAlbums(res.data)
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        console.log("data fetching is in progress")
        fetchTopAlbums()
    }, [])
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                <h2 style={{color:'white'}}>Top Albums</h2>
                <Button variant="text" onClick={() => setIsCollapsed(!isCollapsed)}>{isCollapsed ? "Show All" : "Collapsed"}</Button>
            </Box>

            {isCollapsed ? <Carousel albums={albums} />: <ShowAll albums={albums} />}
        </Box>
    )
}
export default TopAlbums;
