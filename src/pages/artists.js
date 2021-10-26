/*
import * as React from 'react'
import Layout from '../components/layout'
const ArtistsPage = () => {
  return (
    <Layout pageTitle="Artists of Comert Agency">
      <p>A list of artists will be displayed here.</p>
    </Layout>
  )
}
export default ArtistsPage
*/


import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ArtistsPage = ({data: {allWpArtist: {edges}}}) => {
  return (
    <Layout pageTitle="Artists of Comert Agency">
      {edges.map((item) => {
        const artist = item.node.artistMeta;
        return <p key={item.node.id}>{artist.firstName} {artist.lastName}</p>
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
   allWpArtist {
    edges {
      node {
        id
        artistMeta {
          firstName
          lastName
          artistName
        }
      }
    }
  }
}

`

export default ArtistsPage