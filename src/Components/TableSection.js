import { Box, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { libroSelected } from '../features/slice/BookSlice';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import './components.css'
import RowComponent from './RowComponent';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#1d1d1d',
  border: '2px solid #837296',
  boxShadow: 24,
  padding: 20,
  boxSizing: 'border-box',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
};

export default function TableSection() {

  const smallSc = useMediaQuery('(max-width: 768px)')

  useEffect(() => {

  },[])

  const [openBook, setOpenBook] = React.useState(false);
  const handleOpenBook = () => setOpenBook(true);
  const handleCloseBook = () => setOpenBook(false);

  const dispatch = useDispatch()
  const states = useSelector(state => state.books)

  return (
    <div className='tablesection'>
              { smallSc ? 
          <TextField
            id="standard-search"
            label="Buscar"
            type="search"
            variant="standard"
            color='secondary'
            sx={{width: '250px'}}
          /> : null }
        <div className='botsection'>
          <Box width={'100%'} height={'10%'} borderBottom={'solid 2px #685978'} display={'flex'} alignItems={'center'}>
            <Typography variant='body1' width={'100%'} fontSize={13} color={'white'} fontFamily={'Montserrat'} fontWeight={'bold'}>NOMBRE</Typography>
            <Typography variant='body1' align='center' width={'50%'} fontSize={13} color={'white'} fontFamily={'Montserrat'} fontWeight={'bold'}>CATEGORIA</Typography>
            { !smallSc ? 
            <Typography variant='body1' align='center' width={'50%'} fontSize={13} color={'white'} fontFamily={'Montserrat'} fontWeight={'bold'}>FECHA DE REGISTRO</Typography>
            : null }
            <Typography variant='body1' align='center' width={'50%'} fontSize={13} color={'white'} fontFamily={'Montserrat'} fontWeight={'bold'}>DISPONIBLE</Typography>
          </Box>
          {/* Componentes */}
          {!states.librosfiltrados ? states.libros.map((book, index) => (
            <Box key={book._id} width={'100%'} height={'50px'} onClick={() => dispatch(libroSelected(index))}>
              <RowComponent openbook={handleOpenBook} nombre={book.title} categoria={book.category[0].title} fecha={book._createdAt.slice(0, 10)} disponible={book.disponible}/>
            </Box>
          )):
          states.librosfiltrados.map((book, index) => (
            <Box key={book._id} width={'100%'} height={'50px'} onClick={() => dispatch(libroSelected(index))}>
              <RowComponent openbook={handleOpenBook} nombre={book.title} categoria={book.category[0].title} fecha={book._createdAt.slice(0, 10)} disponible={book.disponible}/>
            </Box>
            ))}
        </div>
        {/* Visualizar Libro Modal */}
        <Modal
        open={openBook}
        onClose={handleCloseBook}
        aria-labelledby="ver-libro"
        aria-describedby="descripcion-libro"
        >
          <Box style={style} width={!smallSc ? '450px' : '80%'}>
            <Box width={'100%'} height={'20%'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
              <Typography variant={'body1'} align="center" fontSize={20} fontFamily={'Roboto'} fontWeight={'bold'}>{states.libros[states.selectedLibro].title}</Typography>
              <Typography variant={'body1'} align="center" fontSize={14} fontFamily={'Roboto'}>{states.libros[states.selectedLibro].category[0].title}</Typography>
            </Box>
            <Box width={'100%'} height={'80%'} display={'flex'} alignItems={'center'} flexDirection={'column'} gap={1}>
              <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Typography variant={'body'} fontSize={14} fontFamily={'Roboto'} fontWeight={'bold'}>Disponible: 
              {states.libros[states.selectedLibro].disponible ? 
              <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}><CheckCircleIcon color={'success'}/></Box>
               : <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}><CancelIcon color='error'/></Box>}</Typography>
              </Box>
              <Typography variant={'body'} fontSize={14} fontFamily={'Roboto'} fontWeight={'bold'}>Fecha de Registro: <Typography component={'span'} variant={'body'} fontSize={14} fontFamily={'Roboto'} fontWeight={'bold'}>{states.libros[states.selectedLibro]._createdAt.slice(0, 10)}</Typography></Typography>
              {states.libros[states.selectedLibro].alumno.length > 0 ?
              <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant={'body'} fontSize={14} fontFamily={'Roboto'} fontWeight={'bold'}>Nombre del Alumno:</Typography>
                <Typography variant={'body'} align="center" fontSize={14} fontFamily={'Roboto'}>{states.libros[states.selectedLibro].alumno[0].name}</Typography>
                <Typography variant={'body'} fontSize={14} fontFamily={'Roboto'} fontWeight={'bold'} marginTop={'15px'}>Numero de Control:</Typography>
                <Typography variant={'body'} fontSize={14} fontFamily={'Roboto'}>{states.libros[states.selectedLibro].alumno[0].nocontrol}</Typography>
              </Box>
              : null}
            </Box>
          </Box>
        </Modal>
        {/* Libros filtrados modal */}
        {states.librosfiltrados ?
        <Modal
        open={openBook}
        onClose={handleCloseBook}
        aria-labelledby="ver-libro"
        aria-describedby="descripcion-libro"
        >
          <Box style={style} width={!smallSc ? '450px' : '80%'}>
            <Box width={'100%'} height={'20%'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
              <Typography variant={'body1'} align="center" fontSize={20} fontFamily={'Roboto'} fontWeight={'bold'}>{states.librosfiltrados[states.selectedLibro].title}</Typography>
              <Typography variant={'body1'} align="center" fontSize={14} fontFamily={'Roboto'}>{states.librosfiltrados[states.selectedLibro].category[0].title}</Typography>
            </Box>
            <Box width={'100%'} height={'80%'} display={'flex'} alignItems={'center'} flexDirection={'column'} gap={1}>
              <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Typography variant={'body'} fontSize={14} fontFamily={'Roboto'} fontWeight={'bold'}>Disponible: 
              {states.librosfiltrados[states.selectedLibro].disponible ? 
              <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}><CheckCircleIcon color={'success'}/></Box>
               : <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}><CancelIcon color='error'/></Box>}</Typography>
              </Box>
              <Typography variant={'body'} fontSize={14} fontFamily={'Roboto'} fontWeight={'bold'}>Fecha de Registro: <Typography component={'span'} variant={'body'} fontSize={14} fontFamily={'Roboto'} fontWeight={'bold'}>{states.librosfiltrados[states.selectedLibro]._createdAt.slice(0, 10)}</Typography></Typography>
              {states.librosfiltrados[states.selectedLibro].alumno.length > 0 ?
              <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant={'body'} fontSize={14} fontFamily={'Roboto'} fontWeight={'bold'}>Nombre del Alumno:</Typography>
                <Typography variant={'body'} align="center" fontSize={14} fontFamily={'Roboto'}>{states.librosfiltrados[states.selectedLibro].alumno[0].name}</Typography>
                <Typography variant={'body'} fontSize={14} fontFamily={'Roboto'} fontWeight={'bold'} marginTop={'15px'}>Numero de Control:</Typography>
                <Typography variant={'body'} fontSize={14} fontFamily={'Roboto'}>{states.librosfiltrados[states.selectedLibro].alumno[0].nocontrol}</Typography>
              </Box>
              : null}
            </Box>
          </Box>
        </Modal>
        : null }
    </div>
  )
}
