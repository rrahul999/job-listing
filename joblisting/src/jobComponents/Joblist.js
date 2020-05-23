import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Joblist extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      errorMsg: ''
    }
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then(response => response.json())
      .then(result => {
        this.setState({ posts: result })

      })

      .catch((error) => {
        console.log(error)
        this.setState({
          errorMsg: 'Error retreiving data'
        })
      })

  }


  render() {
    const { posts, errorMsg } = this.state
    return (
      <div className="p-5">
        <h2>List of Candidates</h2>
        {
          posts.length ?

            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">employee_name</th>
                  <th scope="col">Apply here</th>
                </tr>
              </thead>
              <tbody>
                {
                  posts.map(post =>
                    <tr key={post.id}>
                      <th scope="row">{post.id}</th>
                      <td>{post.title}</td>
                      <td><Link to={'/apply/' + post.id}> <input type="submit" value="apply" /> </Link></td>
                    </tr>
                  )
                }


              </tbody>
            </table> : null
        }
        {
          errorMsg ? <div>{errorMsg}</div> : null
        }
      </div>
    )
  }
}

export default Joblist
