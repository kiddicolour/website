import React from "react"
import { StaticQuery, graphql } from "gatsby"

// import Layout from "../components/layout"
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Drawings, Featured } from 'components/landing';

import "../assets/css/main.css"

const IndexPage = ({data, location}) => {
  
  const siteTitle = data?.site.siteMetadata?.title || 'Title'

  return (
  <Layout location={location} title={siteTitle}>
      <SEO />
      <Intro />
      <Featured />
      <Drawings />
      <Skills />
      <Contact />
  </Layout>
)}

export default IndexPage