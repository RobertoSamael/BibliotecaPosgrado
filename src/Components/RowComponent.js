import { Box, Modal, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';


export default function RowComponent(props) {

  const smallSc = useMediaQuery('(max-width: 768px)')

  return (
    <Box className='rowcomp' width={'100%'} height={'50px'} onClick={props.openbook} borderBottom={'solid 2px #685978'} display={'flex'} alignItems={'center'}>
        <Typography variant='body1' width={'100%'} fontSize={13} color={'white'} fontFamily={'Montserrat'}>{props.nombre}</Typography>
        <Typography variant='body1' align='center' width={'50%'} fontSize={13} color={'white'} fontFamily={'Montserrat'}>{props.categoria}</Typography>
        { !smallSc?
        <Typography variant='body1' align='center' width={'50%'} fontSize={13} color={'white'} fontFamily={'Montserrat'}>{props.fecha}</Typography>
        : null }
        <Box width={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>{props.disponible ? <CheckCircleIcon color={'success'}/> : <CancelIcon color='error'/>}</Box>
    </Box>
  )
}
