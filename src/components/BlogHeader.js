import React from 'react'
import Miami from '../assets/images/optimized-miami.jpg'
const BlogHeader = () => {
  return (
    <div className="blog-header">
      <img src={Miami} alt="Miami Skyline" />
      <div className="head-wrap">
        <h1>Colada &amp; Code</h1>
      </div>
    </div>
  )
}

export default BlogHeader
