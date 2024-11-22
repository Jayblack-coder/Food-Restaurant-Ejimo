import React from 'react'
import {Box, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div>
      <Box sx={{textAlign:'center', bgcolor:'#1A1A19', color:'white', p:3,}}>
        
        <Box 
        sx={{my: 3, ' svg': {
          fontSize: '60px',
          cursor: 'pointer',
          mr: 2,
        },
        '& svg:hover':{
          color:'goldenrod',
          transform:'translateX(5px)',
          transition:'all 400ms',
        },
        }}
        >
          {/*icons*/}
          <InstagramIcon/>
          <XIcon/>
          <GitHubIcon/>
          <YouTubeIcon/>
        </Box>
<Typography variant='h5' sx={{'@media (max-width:600px)': {
  fontSize: '1rem',
},
 }}
>
  All Rights Reserved &copy; Techinfo YT
</Typography>
      </Box>
    </div>
  )
}

export default Footer
