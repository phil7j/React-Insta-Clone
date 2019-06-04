import React, { Component } from 'react'
import data from './dummy-data'
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'


export class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      commentText: "",
      userName: "philj"
    }
  }

  componentDidMount(){
    this.setState({
      data: data
    })
  }

  componentDidUpdate(){
    console.log("CHANGE")
  }

  handleCommentChange = e => {
    this.setState({
      comment: {
        text: e.target.value
      }

    })
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        {this.state.data.map( item =>  <PostContainer key={item.id} data={item} handleCommentChange={this.handleCommentChange} />)}
      </div>
    )
  }
}

export default App
