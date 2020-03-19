import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
  /*
   * Sort Local first
   * TODO: do this with GraphQL
   */
  const groups = data.categories.group.sort(group => {
    if (group.nodes[0].data.Category[0] === `Local`) {
      return -1
    }
    return 0
  })
  const categories = groups.reduce((merged, group) => {
    const category = group.nodes[0].data.Category[0]
    merged[category] = group.nodes[0].fields.slug
    return merged
  }, {})
  // TODO: make this suck less
  const categoriesArr = Object.keys(categories)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="mb-20">
        <p className="text-lg mb-8">
          A directory of fundraisers for {data.site.siteMetadata.city} bars,
          venues, restaurants, and service businesses that can use our help to
          support their staff during the state-mandated shutdown. A
          work-in-progress.
        </p>
        <p className="text-lg mb-8">
          Jump to:{" "}
          {
            categoriesArr
              .map((category, index) => (
                <React.Fragment>
                  <a href={`#${categories[category]}`} className="underline">
                    {category}
                  </a>
              {index + 1 === categoriesArr.length ? `` : `,`}{` `}
                </React.Fragment>
              ))
          }
        </p>
        <Link
          to="/submit"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Suggest an addition &rarr;
        </Link>
      </div>

      <div className="mb-10 border shadow p-6">
        <h2 className="text-xl font-bold">
          Featured: COVID-19 Solidarity Response Fund for WHO
        </h2>

        <p className="mt-4">
          Donations support WHO’s work to track and understand the spread of the
          virus; to ensure patients get the care they need and frontline workers
          get essential supplies and information; and to accelerate efforts to
          develop vaccines, tests, and treatments.
        </p>

        <p className="mt-4">
          <a
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"
            target="_blank"
          >
            Donate Here
          </a>
        </p>
      </div>

      {
        groups.map(group => {
          const category = group.nodes[0].data.Category[0]
          const slug = group.nodes[0].fields.slug
          // TODO: normalize these categories 
          return (
            <div className="mb-10">
              <h2 id={slug} className="text-xl font-bold">
                Support {category}
              </h2>

              <ul className="list-disc pl-6 mt-4">
                {
                  group.nodes.map(node => (
                    <li className="mb-2">
                    <a
                      className="underline"
                      href={node.data.FundraiserUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {node.data.FundraiserTitle}
                    </a>{" "}
                    {node.data.FundraiserDescription && (<p className="mt-2 italic">
                      {node.data.FundraiserDescription}
                    </p>)}
                  </li>
                  ))
                }
              </ul>
            </div>
          )
        })
      }
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        city
        state
      }
    }
    
    categories: allAirtable(filter: {data: {Approved: {eq: "Yes"}}}) {
      group(field:data___Category) {
        nodes {
          fields {
            slug
          }
          data {
          BusinessName
          Category
          FundraiserDescription
          FundraiserTitle
          FundraiserUrl
          Approved
          }
        }
      }
    }
  }
`

export default IndexPage
