import React, { useContext }  from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';
import { Feature } from './feature'

export const Featured = () => {
    const { theme } = useContext(ThemeContext);
    const {
        features: {
            edges
        }
      } = useStaticQuery(
        graphql`
          {
            features: allStrapiFeature {
              edges {
                node {
                  strapiId
                  title
                  description
                  drawing {
                    id
                    title
                    description
                    image {
                      url
                    }
                  }
                  download {
                    id
                    title
                    description
                    file {
                      url
                    }
                  }
                  theme {
                    id
                    name
                    description
                  }
                  type {
                    id
                    name
                    description
                  }
                }
              }
            }
          }
        `
      );

    return (
        <Wrapper as={Container} id="projects">
            <h2>Featured</h2>
            <Grid>
                {edges.map(({ node }) => (
                    <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
                      <Feature feature={node}/>
                    </Item>
                ))}
            </Grid>
        </Wrapper>
    )

}
