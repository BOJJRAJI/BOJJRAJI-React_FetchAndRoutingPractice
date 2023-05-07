import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogLists: [], isLoading: true}

  componentDidMount() {
    this.getBlogsLits()
  }

  getBlogsLits = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updateData = data.map(item => ({
      id: item.id,
      author: item.author,
      avatarUrl: item.avatar_url,
      imageUrl: item.image_url,
      title: item.title,
      topic: item.topic,
    }))
    console.log(updateData)
    this.setState({blogLists: updateData, isLoading: false})
  }

  renderBlogItems = () => {
    const {blogLists} = this.state
    return (
      <>
        {blogLists.map(blog => (
          <BlogItem blogDetails={blog} key={blog.id} />
        ))}
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <ul className="blogs-container">
        {isLoading && (
          <div data-testid="loader">
            <Loader
              height={50}
              width={50}
              type="TailSpin"
              color="#00BFFF"
              className="spinner"
            />
          </div>
        )}

        {!isLoading && this.renderBlogItems()}
      </ul>
    )
  }
}

export default BlogList
