import React from 'react'
import Link from 'gatsby-link'
import '../assets/sass/index.scss'
import BlogHeader from '../components/BlogHeader'
import Menu from '../components/Menu'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div className="blog-post-layout">
      <Menu />
      <BlogHeader />
      <div className="blog-content-container">
        <div className="blog-content-copy">
          <h1 className="section-title">{post.frontmatter.title}</h1>
          <p className="post-details">
            posted: <span>{post.frontmatter.date}</span>
          </p>
          <p className="post-details">
            by: <span>{post.frontmatter.author}</span>
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <Link to="/blog">
            <button>
              <span>Back</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        image
      }
    }
  }
`
