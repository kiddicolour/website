import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Helmet from 'react-helmet'
import Thumbnail from 'assets/thumbnail/thumbnail.png'

import {
  url,
  defaultDescription,
  social,
  defaultTitle,
  socialLinks,
  address,
  contact,
  legalName,
  foundingDate,
  logo,
} from 'data/config'

export const SEO = ({
  seo = {},
  title = defaultTitle,
  description = defaultDescription,
  location = '',
}) => {
  const { strapiGlobal } = useStaticQuery(querySEO)
  const defaultSeo = strapiGlobal.seo

  const structuredDataOrganization = `{
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.google}",
			"${socialLinks.youtube}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
  }`

  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo, ...seo }

  const tags = getMetaTags(fullSeo)

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />

      <meta property="og:url" content={`${url}${location}/?ref=smakosh.com`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />
      <meta property="fb:app_id" content={social.facebook} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={socialLinks.twitter} />
      <meta name="twitter:site" content={social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={Thumbnail} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link rel="publisher" href={socialLinks.google} />
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

export const querySEO = graphql`
  query {
    strapiGlobal {
      title
      description
      seo {
        meta {
          title
          description
          keywords {
            name
          }
        }
<<<<<<< HEAD
=======
        shareImage {
          image {
            url
          }
        }
>>>>>>> ea7a94fa742b0a82a0ba3b146d1282d294178ce7
      }
    }
  }
`

export const composeSEO = (general, specific) => {
  // Merge default and page-specific SEO values
  const seo = { ...general, ...specific }

  const tags = getMetaTags(seo)

  return { ...seo, tags: tags }
}

export const getMetaTags = seo => {
  console.log('getMetaTags SEO', seo)
  const tags = []

  if (seo?.title) {
    tags.push(
      {
        property: 'og:title',
        content: seo.title,
      },
      {
        name: 'twitter:title',
        content: seo.title,
      }
    )
  }
  if (seo?.description) {
    tags.push(
      {
        name: 'description',
        content: seo.description,
      },
      {
        property: 'og:description',
        content: seo.description,
      },
      {
        name: 'twitter:description',
        content: seo.description,
      }
    )
  }
  if (seo?.shareImage) {
    const imageUrl =
      (process.env.GATSBY_ROOT_URL || 'http://localhost:8000') +
      seo.shareImage.url
    tags.push(
      {
        name: 'image',
        content: imageUrl,
      },
      {
        property: 'og:image',
        content: imageUrl,
      },
      {
        name: 'twitter:image',
        content: imageUrl,
      }
    )
  }
  if (seo?.article) {
    tags.push({
      property: 'og:type',
      content: 'article',
    })
  }
  tags.push({ name: 'twitter:card', content: 'summary_large_image' })

  return tags
}
