import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
    
    <Box sx={{ my: 5, ml: 10, '& h4': { fontWeight:'bold', mb: 2 }}}>
      <Typography variant='h4'>
        Contact My Restaurant
      </Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod! Perferendis optio dolores porro, possimus in quasi consequuntur eos a veritatis voluptas. Fuga, saepe soluta voluptas repellendus voluptatum modi repellat?
      </p>
    </Box>
    <Box sx={{ mr: 3, width:'600px', ml: 10, '@media (max-width:600px)': {
      width:'300px',
    },
    }}>
      <TableContainer component={Paper}>
<Table aria-label='contact table'>
<TableHead>
  <TableRow>
    <TableCell sx={{ backgroundColor:'black', color:'white'}} align='center'>Contact Details</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  <TableRow>
    <TableCell>
      <SupportAgentIcon sx={{ color:'red', pt: 1 }}/> 0002-00-5555 (toll free)
    </TableCell>
  </TableRow>
  <TableRow>
  <TableCell>
      <EmailIcon sx={{ color:'blue', pt: 1 }}/> ejchukwuma@gmail.com
    </TableCell>
  </TableRow>
  <TableRow>
  <TableCell>
      <CallIcon sx={{ color:'green', pt: 1 }}/> +234-8052334571
    </TableCell>
  </TableRow>
</TableBody>
</Table>
      </TableContainer>
    </Box>
    </Layout>
  )
}

export default Contact
