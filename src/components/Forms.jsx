import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Textarea from './Textarea';
import styles from './Form.module.css';

let CommentForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={styles.commentForm}>
            <Field component={Textarea} name='comment' className={styles.commentForm__textarea} />
            <div className={styles.сommentForm__btnWraper}>
                <button className={styles.commentForm__btn}>Написать Консультанту</button>
            </div>
        </form>
    )
};


CommentForm = reduxForm(
    {
        form: 'comment'
    }
)(CommentForm);

export { CommentForm }