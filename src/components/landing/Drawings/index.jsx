import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeContext } from 'providers/ThemeProvider'
import { Container, Card, TitleWrap } from 'components/common'
import Star from 'components/common/Icons/Star'
import Fork from 'components/common/Icons/Fork'
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles'

export const Drawings = () => {
  const { theme } = useContext(ThemeContext)
  const {
    drawings: { edges },
  } = useStaticQuery(
    graphql`
      {
        drawings: allStrapiDrawing {
          edges {
            node {
              strapiId
              title
              slug
              description
              image {
                publicURL
              }
              themes {
                name
              }
              ages {
                name
              }
              types {
                name
              }
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper as={Container} id="drawings">
      <h2>Drawings</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.strapiId}
            as="a"
            href={node.title}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <Card theme={theme}>
              <Content>
                <h4>{node.title}</h4>
                <p>{node.description}</p>
              </Content>
              <TitleWrap>
                <Stats theme={theme}>
                  <div>
                    <Star color={theme === 'light' ? '#000' : '#fff'} />
                    <span>{node.themes.length}</span>
                  </div>
                  <div>
                    <Fork color={theme === 'light' ? '#000' : '#fff'} />
                    <span>{node.ages.length}</span>
                  </div>
                </Stats>
                <Stats theme={theme}>
                  <Languages>
                    {node.types.map(({ name }) => (
                      <span key={name}>{name}</span>
                    ))}
                  </Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
