import React from 'react'
import Link from 'gatsby-link'
const BlogPage = ({data}) => (  
  <div>
    <h1>All Posts</h1>
    {data
      .allMarkdownRemark
      .edges
      .sort((a, b) => parseInt(b.node.frontmatter.path.split('/')[3]) - parseInt(a.node.frontmatter.path.split('/')[3])) 
      .map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
      ))
    }
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
          }
        }
      }
    }
  }
`

export default BlogPage
