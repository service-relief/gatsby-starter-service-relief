import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AirtableForm from '../components/airtable-form'

const SecondPage = () => (
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
    <AirtableForm id="shrQmU4apYqhQmEk6" />
  </Layout>
)

export default SecondPage
