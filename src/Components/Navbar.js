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
            <InputLabel id="demo-multiple-select-label">Categoria</InputLabel>
            <Select
              labelId="demo-multiple-select-label"
              id="demo-multiple-select"
              value={categoria}
              label="Categoria"
              onChange={(e) => {dispatch(setCategoriaFiltrada(e.target.value)); setCategoria(e.target.value);}}
            >
              <MenuItem value={"Programacion"}>Programacion</MenuItem>
              <MenuItem value={"Quimica"}>Quimica</MenuItem>
              <MenuItem value={"Mecanica"}>Mecanica</MenuItem>
              <MenuItem value={"Matematicas"}>Matematicas</MenuItem>
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
