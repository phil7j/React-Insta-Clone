import React, { Component } from 'react'
import './commentsection.css'

export class CommentSection extends Component {
    render() {
        // console.log(this.props.comments)
        return (
            <div>
               <div className="comment-container">
                {this.props.comments.map( comment => (
                    <div className="comment" key={comment.id}>
                        <p className="username">{comment.username}</p>
                        <p className="text">{comment.text}</p>
                    </div>
                        ))}
               </div>
               <div className="addcomment">
                    <input placeholder="Add a comment..." />
               </div>
            </div>
        )
    }
}

export default CommentSection
