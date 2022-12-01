import { Box, FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select, useMediaQuery } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategoriaFiltrada, setLibrosFiltrados } from '../features/slice/BookSlice';

import './components.css'

export default function Navbar() {

  const smallSc = useMediaQuery('(max-width: 768px)')

  const [categoria, setCategoria] = React.useState("");

  const dispatch = useDispatch()

  const states = useSelector(state => state.books)
  console.log(states.librosfiltrados)

  return (
    <div className='navbar'>
        <div className='seccionlogo'>
            <img className='logotec' src='/tecnmlogo.jpg' alt='tecnmlogo'/>
            <h3 className='bibliotecaposgrado'>Biblioteca Posgrado</h3>
        </div>
        { !smallSc ? 
        <Box display={'flex'} alignItems={'center'} gap={2}>
          <FormControl size='small' sx={{width: '200px'}} color="secondary">
            <InputLabel id="demo-multiple-select-label">Categoría</InputLabel>
            <Select
              labelId="demo-multiple-select-label"
              id="demo-multiple-select"
              value={categoria}
              label="Categoría"
              onChange={(e) => {dispatch(setCategoriaFiltrada(e.target.value)); setCategoria(e.target.value);}}
            >
              <MenuItem value={"Programación"}>Programación</MenuItem>
              <MenuItem value={"Química"}>Química</MenuItem>
              <MenuItem value={"Mecánica"}>Mecánica</MenuItem>
              <MenuItem value={"Matemáticas"}>Matemáticas</MenuItem>
              <MenuItem value={"Electrónica"}>Electrónica</MenuItem>
              <MenuItem value={"Ciencias"}>Ciencias</MenuItem>
            </Select>
            </FormControl>
            <FormControl size='small' sx={{width: '300px'}} color="secondary">
            <InputLabel id="demo-simple-input-label">Buscar</InputLabel>
              <OutlinedInput
                id="standard-search"
                label="Buscar"
                type="search"
                onChange={e => dispatch(setLibrosFiltrados(e.target.value))}
                />
            </FormControl>
          </Box>
          : null }
    </div>
  )
}
