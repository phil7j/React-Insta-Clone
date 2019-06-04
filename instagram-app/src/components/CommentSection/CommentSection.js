import React, { Component } from 'react'
import './commentsection.css'
import PropTypes from 'prop-types';

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
               <form className="addcomment">
                    <input value={this.props.commentText} placeholder="Add a comment..." onChange={this.props.handleCommentChange} />
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
