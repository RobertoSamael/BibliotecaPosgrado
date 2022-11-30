export default {
  name: 'libro',
  title: 'Libro',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Category',
      name: 'category',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'alumno',
      title: 'Alumnos que tomaron libro',
      type: 'array',
      of: [{type: 'reference', to: {type: 'alumno'}}]
    },
    {
      name: 'taken',
      title: 'Prestado',
      type: 'datetime',
    },
    {
      name: 'disponible',
      title: 'Disponible',
      type: 'boolean'
    }
  ]
}
