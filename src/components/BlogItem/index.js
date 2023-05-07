import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, avatarUrl, author, title, topic} = blogDetails

  return (
    <Link className="blog-item" to={`/blogs/${id}`}>
      <li className="blog-link--item">
        <img src={imageUrl} alt={title} className="blog-image-data" />
        <div className="blog-content">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={author} className="avatar-image" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
