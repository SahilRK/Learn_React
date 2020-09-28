//import libraries to be used in file
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//Create a Main Function component called App
const App = () => {
    return (
        <div className="ui container comments">
            {/*This is an example of component nesting. CommentDetail component is nested inside App component. These are also called child components.*/}
            <ApprovalCard>
                <CommentDetail 
                    author = "Sam" 
                    timeAgo="Today at 2:00PM" 
                    commentText="Nice blog post" 
                    profilePic={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = "Sah" 
                    timeAgo="Today at 5:00AM" 
                    commentText="Keep up the good work" 
                    profilePic={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = "Anki" 
                    timeAgo="Yesterday at 11:00PM" 
                    commentText="Nice idea" 
                    profilePic={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

//The component is then rendered to the DOM
ReactDOM.render(<App />, document.querySelector('#root'));
