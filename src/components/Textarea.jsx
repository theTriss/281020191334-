import React from 'react';
import {connect} from 'react-redux';
import {addCommentTC} from '../redux/reducers/app-reducer';
import {commentValidator} from '../validators/validators';


const Textarea = ({input, addCommentTC, className}) => {

    const onKeyDown = (event) => {
        const {keyCode, ctrlKey, target: {value}} = event;
        keyCode === 13 && event.preventDefault();
        (ctrlKey && keyCode === 13) && commentValidator(value, addCommentTC)

    }

    const events = {
        ...input, 
        onKeyDown
    }

    return (
        <textarea {...events} className={className} />
    )
}

export default connect(null, {addCommentTC})(Textarea);