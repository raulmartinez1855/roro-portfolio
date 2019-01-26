import React from 'react'
import Link from 'gatsby-link'
import BlogHeader from '../components/BlogHeader'
import Menu from '../components/Menu'
import { withPrefix } from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div className="blog-index">
    <Menu />
    <BlogHeader />
    <div className="blog-cards-container">
      {data.allMarkdownRemark.edges
        .sort(
          (a, b) =>
            parseInt(b.node.frontmatter.path.split('/')[3]) -
            parseInt(a.node.frontmatter.path.split('/')[3])
        )
        .map(post => (
          <div className="blog-card" key={post.node.id}>
            <div className="card-body">
              <div className="card-top">
                <div className="card-header">
                  <div className="post-info">
                    {/* <span>{post.node.frontmatter.author}</span> */}
                  </div>
                  <div className="post-image">
                    <img src={withPrefix(post.node.frontmatter.image)} alt="" />
                  </div>
                </div>
                <div className="card-content">
                  <h2>{post.node.frontmatter.title}</h2>
                  <p>{post.node.frontmatter.desc}</p>
                </div>
              </div>
              <div className="center">
                <Link to={post.node.frontmatter.path}>READ MORE</Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            author
            image
            desc
          }
        }
      }
    }
  }
`

export default BlogPage
