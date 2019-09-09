import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../components/scss/index.scss'

class AuthorRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const author = this.props.pageContext.author
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const authorHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } by “${author}”`

    return (
      <Layout>
        <section className="section" style={{minHeight: "35em"}}>
          <Helmet title={`${author} | ${title}`} />
          <div className="container content box">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-4 is-bold-light">{authorHeader}</h3>
                <ul className="taglist">{postLinks}</ul>
                <p>
                  <Link to="/authors/">Browse all authors</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default AuthorRoute

export const authorPageQuery = graphql`
  query AuthorPage($author: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { in: [$author] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
