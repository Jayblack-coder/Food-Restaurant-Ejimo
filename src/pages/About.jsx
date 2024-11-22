import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    
        <Layout>
       <Box 
       sx={{
        my: 15,
        textAlign:'center',
        p: 2,
        '& h4':{
          fontWeight:'bold',
          my: 2,
          fontSize:'2rem'
        },
        '& p':{
          textAlign:'justify'
        },
        '@media(max-width)':{
          mt: 0,
          '& h4':{
          fontWeight:'bold',
        },
      },
      }}
      >
        <Typography variant='h4'>
         Welcome To My Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vel obcaecati labore officia eaque fugit voluptates? Placeat quasi, reprehenderit libero ipsam labore corrupti? Corporis harum obcaecati laboriosam minus excepturi voluptatem odit veritatis, doloremque sit tempora, dolorem, magnam eligendi sunt aliquam consectetur asperiores modi cumque perferendis. Quibusdam quos earum, ea nostrum recusandae dolore eligendi sunt dolor, consequuntur saepe voluptate aspernatur, rerum totam hic ex. Temporibus, maiores doloremque illo voluptate, animi officia voluptas eos laudantium quidem mollitia accusantium quod ad eum? Doloribus minus debitis earum deserunt recusandae ea illo molestias dolorem quam accusamus laborum nobis dolorum natus est asperiores, quos hic voluptatum?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptates fuga deserunt, nam rerum non aut sit laborum quasi laudantium distinctio, cumque quidem libero iusto quae sunt ipsum quas alias aperiam officia ex a error amet. Ab repellat incidunt aut, illo illum autem quisquam enim voluptatum voluptas, fuga corporis officiis nobis reprehenderit quod eaque quas labore! Sed quisquam aspernatur quibusdam ab velit laboriosam a voluptate eum maiores labore excepturi illum accusamus, odit aut mollitia dolore id magni iure eveniet expedita nisi unde fugit tempore nulla. Blanditiis, assumenda non, esse nostrum libero quos, laborum ab eius magni ad sapiente optio quam!

        </p>
       </Box>
        </Layout>
      
  )
}

export default About
