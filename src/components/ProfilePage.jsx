import React from 'react';
import Profile from './Profile';
import Comments from './Comments';
import {CommentForm} from './Forms';
import {commentValidator} from '../validators/validators';
import styles from './ProfilePage.module.css';


const ProfilePage = ({comments, addCommentTC}) => {
    
    const formSubmit = ({comment}) => {
        commentValidator(comment, addCommentTC);
    }

    return (
        <div className={styles.profilePage}>
            <Profile />
            <Comments comments={comments}/>
            <CommentForm onSubmit={formSubmit}/>
        </div>
    )
}

export default ProfilePage