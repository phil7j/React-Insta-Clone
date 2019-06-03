import React, { Component } from 'react'
import './postcontainer.css'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types';

export class PostContainer extends Component {
    constructor(props){
        super();
    }
    render() {
        // console.log(this.props.data);
        return (
            <div className='PostContainer'>
                <div className="postauthor">
                    <img src={this.props.data.thumbnailUrl} alt="thumbnail"></img>
                    <p>{this.props.data.username}</p>
                </div>
                <div className="mainpic">
                    <img src={this.props.data.imageUrl} alt="Post"></img>
                </div>

            <CommentSection comments={this.props.data.comments} />
            </div>
        )
    }
}

PostContainer.propTypes = {
    data: PropTypes.PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments:PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                username: PropTypes.string,
                text: PropTypes.string
            })

            )
        })
}

export default PostContainer
