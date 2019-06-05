import React, { Component } from 'react'
import './commentsection.css'
import PropTypes from 'prop-types';

export class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: this.props.comments,
            text: "",
            username: "philj",
            id: Date.now()
        }
    }

    handleCommentChange = e => {
        this.setState({
          text: e.target.value
        })
      }

    addComment = e => {
        e.preventDefault();
        const newComment = {
                id: this.state.id,
                username: this.state.username,
                text: this.state.text
              }
        this.setState({
            comments: [...this.state.comments, newComment],
            text: "",
            username: "philj"

        })

    }


    render() {
        // console.log(this.props.comments)
        return (
            <div>
               <div className="comment-container">
                {this.state.comments.map( comment => (
                    <div className="comment" key={comment.id}>
                        <p className="username">{comment.username}</p>
                        <p className="text">{comment.text}</p>
                    </div>
                        ))}
               </div>
               <form className="addcomment"
                onSubmit={this.addComment}>
                    <input
                        value={this.state.text}
                        name={this.props.id} placeholder="Add a comment..."
                        onChange={this.handleCommentChange} />
               </form>
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection
