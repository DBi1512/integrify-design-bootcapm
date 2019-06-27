import React from "react"
import { graphql } from 'gatsby';

import App from '../components/App';

const IndexPage = ({ data }) => {
console.log('afsf',data);

  const jsx = (
    <App data={data} />
  )
  return jsx;
}

export default IndexPage

export const query = graphql`
{
  contentfulIndex{
    id
    headerTitle
    headerSubtitle
    headerPill {
      text
      to {
        slug
      }
    }
    headerImage {
      file {
        url
      }
    }
    main{
      __typename
      ... on ContentfulTitlesAndThreeColumns {
        id
        title
        subtitle{
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}`