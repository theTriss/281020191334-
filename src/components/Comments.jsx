import React from 'react';
import { NavLink } from 'react-router-dom';
import Comment from './Comment';
import styles from './Comments.module.css';

const Comments = ({ comments }) => {
    return (
        <div className={styles.comments}>
            <div className={styles.panel}>
                <div className={styles.panel__lastComments}>Последние отзывы</div>
                <NavLink to='/' className={styles.panel__link}>Все отзывы</NavLink>
                <div className={`${styles.panel__statistic} ${styles.statistic}`}>
                    <div className={`${styles.statistic__item} ${styles.statistic__item_first}`}>
                        <div className={`${styles.statistic__icon} ${styles.statistic__icon_likes}`}></div>
                        <div className={styles.statistic__counter}>131</div>
                    </div>
                    <div className={styles.statistic__item}>
                        <div className={`${styles.statistic__icon} ${styles.statistic__icon_comments}`}></div>
                        <div className={styles.statistic__counter}>14</div>
                    </div>
                </div>
            </div>
            <div className={styles.comments__items}>
                {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            </div>
        </div>
    )
}

export default Comments;