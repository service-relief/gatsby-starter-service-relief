import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AirtableForm from '../components/airtable-form'

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          airtableEmbed
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Submit a Fundraiser" />
  
      <p className="mb-10">
        <Link
          to="/"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          &larr; View All Fundraisers
        </Link>
      </p>
      <AirtableForm id={data.site.siteMetadata.airtableEmbed} />
    </Layout>
  )
}

export default SecondPage
