import React from 'react';
import styles from './Comments.module.css'

const Comment = ({comment: {name, date, comment}}) => {
    return (
        <div className={styles.comments__item}>
            <div className={styles.comments__info}>
                <div className={styles.comments__user}>{name}</div>
                <div className={styles.comments__date}>{date}</div>
            </div>
            <div className={styles.comments__comment}>{comment}</div>
        </div>
    )
}

export default Comment;