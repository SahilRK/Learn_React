import React from 'react';
import CommentDetail from "./CommentDetail"
import faker from 'faker'

const ApprovalCard = () => {
    return(
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <CommentDetail 
                        author = "Sam" 
                        timeAgo="Today at 2:00PM" 
                        commentText="Nice blog post" 
                        profilePic={faker.image.avatar()}
                    />
                </div>
                <div class="extra content">
                    <div class="ui two buttons">
                        <div class="ui basic green button">Approve</div>
                        <div class="ui basic red button">Decline</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCard