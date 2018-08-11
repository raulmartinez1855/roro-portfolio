import React from 'react'
import Link from 'gatsby-link'
import BlogHeader from '../components/BlogHeader'

const BlogPage = ({ data }) => (
  <div className="blog-index">
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
            <img src={post.node.frontmatter.image} alt="" />
            <div className="card-body">
              <h3>{post.node.frontmatter.title}</h3>
              <div className="card-content">
                <p>Posted by: {post.node.frontmatter.author}</p>
                <p> on {post.node.frontmatter.date}</p>
                <Link to={post.node.frontmatter.path}>Read More</Link>
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
            date
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
