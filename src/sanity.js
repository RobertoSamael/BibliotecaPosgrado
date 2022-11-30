import sanityClient from '@sanity/client'


export const client = sanityClient({
    projectId: '0hme7ain',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true
})


export default client;
