import React from 'react'
import Link from 'gatsby-link'

export default function Template({data}) {
  const post = data.markdownRemark

  return (
      <div className='blog-post-layout'>
          <Link to="/blog">Back</Link>
          <br />
          <br />
          <h1>{post.frontmatter.title}</h1>
          {console.log(post)}
          <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`