import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, Chip } from '@mui/material';

const SongCard = ({ album }) => {

  return (
    <>
      <Box sx={{ height: '232px', width: '159px',  }}>

        <Card sx={{ height: '205px' }}>
          <CardActionArea>
            <Box sx={{ height: '170px', width: '100%', position: 'relative' }}>

              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={album.image}
                alt="green iguana"
                sx={{ objectFit: 'cover', overflow: 'hidden' }}
              />
              <Typography variant='p' component='h3' sx={{ width: '100%', position: 'absolute', top: '4%', textAlign: 'center' }}>{album.title}</Typography>
              <Typography variant='p'  component="h5" sx={{ width: '100%', position: 'absolute', bottom: '1%', textAlign: 'center',color:'#FFFFFF' }}>{album.description}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '35px', width: '100%', background: '#FFFFFF' }}>
              <Chip label={album.follows ? `${album.follows} Follows`: `${album.likes} Likes`} size='small' sx={{ background: '#121212', padding: '4px 8px', color: '#FFFFFF', gap: '1px' }} />
            </Box>
          </CardActionArea>
        </Card>

        <Typography sx={{background:'#121212', color: '#FFFFFF', fontWeight: 400, font: 'Poppins', height: '100%' }}>New Punjabi song</Typography>
      </Box>
    </>
  );
}
export default SongCard;
