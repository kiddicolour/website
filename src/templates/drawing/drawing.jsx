import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'

import { Container, Layout, SEO } from 'components/common'
import { Header } from 'components/common'

import { Wrapper, FilterWrapper, Filter, DrawingWrapper, ButtonsWrapper, Button, Title, DesktopTitle, ImageWrapper, Image, CategoriesWrapper, CategoryWrapper, CategoryTitle, Category, CategoryImage, CategoryName } from './styles'

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
        slug
        iconClass
      }
      themes {
        name
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
            <Image src={drawing.image.publicURL} alt={drawing.title}></Image>
            <CategoriesWrapper>
              <CategoryWrapper>
                <CategoryTitle>leeftijd</CategoryTitle>
                {drawing.ages.map((age, index) => (
                  <Category
                    as={Link}
                    to={"/leeftijd/" + age.slug}
                  >
                    <CategoryImage className={age.iconClass}></CategoryImage>
                    <CategoryName>{age.name}</CategoryName>
                  </Category>
                ))}
              </CategoryWrapper>
              <CategoryWrapper>
                <CategoryTitle>type</CategoryTitle>
                {drawing.types.map((type, index) => (
                  <Category
                    as={Link}
                    to={"/type/" + type.slug}
                  >
                    <CategoryImage className={type.iconClass}></CategoryImage>
                    <CategoryName>{type.name}</CategoryName>
                  </Category>
                ))}
              </CategoryWrapper>
              <CategoryWrapper>
                <CategoryTitle>thema</CategoryTitle>
                {drawing.themes.map((theme, index) => (
                  <Category
                    as={Link}
                    to={"/thema/" + theme.slug}
                  >
                    <CategoryImage className={theme.iconClass}></CategoryImage>
                    <CategoryName>{theme.name}</CategoryName>
                  </Category>
                ))}
              </CategoryWrapper>
            </CategoriesWrapper>
          </ImageWrapper>
          <DesktopTitle>{drawing.title}</DesktopTitle>
        </DrawingWrapper>
      </Wrapper>

      <div>
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
      </div>
    </Layout>
  )
}

export default Drawing
