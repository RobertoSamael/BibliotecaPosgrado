import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import TableSection from '../Components/TableSection'
import client from '../sanity'
import {useDispatch, useSelector} from 'react-redux'
import { Box } from '@mui/material'

import './Homepage.css'
import { setLibro } from '../features/slice/BookSlice'

export default function Homepage() {
  const dispatch = useDispatch();
  const query = '*[_type == "libro"]{ ..., alumno[]->{name, nocontrol}, category[]->{title}}'
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    client.fetch(query).then(book => {
      dispatch(setLibro(book))
      setDataLoaded(true);
    })
  },[])

  if(!dataLoaded){
    return (
      <Box width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <h2>Cargando Biblioteca..</h2>
      </Box>
    )
  }

  return (
    <div className='body'>
        <Navbar/>
        <TableSection/>
    </div>
  ) 
}
