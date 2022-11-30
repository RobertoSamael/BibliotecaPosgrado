import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    libros: [],
    selectedLibro: 0,
    librosfiltrados: []
  };

  export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setLibro(state, action){
            state.libros = action.payload
        },
        libroSelected(state, action){
            state.selectedLibro = action.payload
        },
        setLibrosFiltrados(state, action){
            state.librosfiltrados = state.libros.filter(libro => {
                return (
                libro.title.includes(action.payload)
            );
        })
        },
        setCategoriaFiltrada(state, action){
            state.librosfiltrados = state.libros.filter(libro => {
                return (
                libro.category[0].title.includes(action.payload)
            );
        })
        }
        //Dado el action payload, devolver un arreglo con todos los libros iguales al actionpayload
    },
});
export const { setLibro, libroSelected, setLibrosFiltrados, setCategoriaFiltrada } = bookSlice.actions

export default bookSlice.reducer