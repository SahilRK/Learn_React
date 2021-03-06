import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    return(
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.profilePic} />
            </a>
            <div className="content">
                <a className="author" href="/">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.commentText}</div>
            </div>
        </div>
    );
};

//This is how a Component is made available to other components to be reused.
export default CommentDetail;