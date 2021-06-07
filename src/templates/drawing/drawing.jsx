import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'

import { Container, Layout, SEO } from 'components/common'
import { Header } from 'components/common'

import { Wrapper, FilterWrapper, Filter, DrawingWrapper, ButtonsWrapper, Button, Title, ImageWrapper, Body, Image, DesktopTitle, Description, CategoriesWrapper, CategoryWrapper, CategoryTitle, Category, CategoryImage, CategoryName } from './styles'

import '../../components/common/Header/NavbarLinks/styles.css'

export const query = graphql`
  query DrawingQuery($id: Int!) {
    strapiDrawing(strapiId: { eq: $id }) {
      strapiId
      title
      description
      image {
        publicURL
      }
      ages {
        name
        slug
        iconClass
      }
      types {
        name
        parent
        slug
        iconClass
      }
      themes {
        name
        parent
        slug
        iconClass
      }
    }
  }
`

const Drawing = ({ data }) => {
  const drawing = data.strapiDrawing
  return (
    <Layout>
      <SEO />
      <Header />
      <Wrapper as={ Container }>
        <FilterWrapper>
          <Filter></Filter>
        </FilterWrapper>
        <DrawingWrapper>
          <ButtonsWrapper>
            <Button>voeg je eigen tekst toe</Button>
            <Button>print mijn kleurprent</Button>
            <Button>mail mijn kleurprent</Button>
          </ButtonsWrapper>
          <Title>{drawing.title}</Title>
          <ImageWrapper>
            <Body>
              <Image src={drawing.image != null ? drawing.image.publicURL : "/"}></Image>
              <DesktopTitle>{drawing.title}</DesktopTitle>
              <ReactMarkdown children={drawing.description} />
            </Body>
            <CategoriesWrapper>
              <CategoryWrapper>
                <CategoryTitle>leeftijd</CategoryTitle>
                {drawing.ages.map(age => (
                  <Category
                    as={Link}
                    to={"/leeftijd/" + age.slug}
                  >
                    <CategoryImage className={"navIcon " + age.iconClass}></CategoryImage>
                    <CategoryName>{age.name}</CategoryName>
                  </Category>
                ))}
              </CategoryWrapper>
              <CategoryWrapper>
                <CategoryTitle>type</CategoryTitle>
                {drawing.types.map(type => {
                  /* replace hard code */
                  if(type.parent === 237) {
                    return <Category
                      as={Link}
                      to={"/type/" + type.slug}
                    >
                      <CategoryImage className={"navIcon " + type.iconClass}></CategoryImage>
                      <CategoryName>{type.name}</CategoryName>
                    </Category>
                  }
                })}
              </CategoryWrapper>
              <CategoryWrapper>
                <CategoryTitle>thema</CategoryTitle>
                {drawing.themes.map(theme => {
                  /* replace hard code */
                  if(theme.parent === 785) {
                    return <Category
                      as={Link}
                      to={"/theme/" + theme.slug}
                    >
                      <CategoryImage className={"navIcon " + theme.iconClass}></CategoryImage>
                      <CategoryName>{theme.name}</CategoryName>
                    </Category>
                  }
                })}
              </CategoryWrapper>
            </CategoriesWrapper>
          </ImageWrapper>
        </DrawingWrapper>
      </Wrapper>

      {/* <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={drawing.image.publicURL}
          data-srcset={drawing.image.publicURL}
          data-uk-img
        >
          <h1>{drawing.title}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={drawing.description} />
            <p>
              <Moment format="MMM Do YYYY">{drawing.updated_at}</Moment>
            </p>
          </div>
        </div>
      </div> */}
    </Layout>
  )
}

export default Drawing
